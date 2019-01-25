import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation';
import { ScrollView, View, Image, ImageBackground } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';

import connectRedux from '../../redux/ConnectRedux';
import styles from './styles';
import { scaleSzie } from '../../utils/func';
import { Text, Button } from '../../components';
import Configs from '../../configs';

const USER_GRADUATION = require('../../resources/graduation.png');
const CHAT = require('../../resources/chat.png');
const EVENT = require('../../resources/event.png');
const NEWS = require('../../resources/news.png');
const CONTACT = require('../../resources/contact.png');
const SCHOOL = require('../../resources/schoolNus.png')

class SideMenu extends Component {

  constructor(props) {
    super(props);
  }

  navigateToScreen = (route, title) => {
    console.log(route)
    const navigateAction = NavigationActions.navigate({
      routeName: route
    });
    this.props.navigation.dispatch(navigateAction);
    this.props.actions.app.changeRouterDrawer(title)
  }

  renderItemSideVector(icon, title, route) {
    const { routeName } = this.props;
    const temptIconColor = routeName === title ? Configs.ORANGE : "#fff";
    const temptTitleColor = routeName === title ? Configs.ORANGE : "#fff";
    return (
      <Button onPress={() => this.navigateToScreen(route, title)} style={{ flexDirection: 'row', height: scaleSzie(55) }} >
        <View style={{ width: scaleSzie(70), paddingLeft: scaleSzie(15), justifyContent: 'flex-end' }} >
          <Entypo name={icon} size={25} color={temptIconColor} />
        </View>
        <View style={{ flex: 1, justifyContent: 'flex-end', paddingBottom: scaleSzie(5) }} >
          <Text style={[styles.textMenu, { color: temptTitleColor }]} >
            {title}
          </Text>
        </View>
      </Button>
    );
  }

  renderItemSideImage(icon, title, style, route) {
    return (
      <Button onPress={() => this.navigateToScreen(route, title)} style={{ flexDirection: 'row', height: scaleSzie(55) }} >
        <View style={{ width: scaleSzie(70), paddingLeft: scaleSzie(15), justifyContent: 'flex-end' }} >
          <Image source={icon} style={style} />
        </View>
        <View style={{ flex: 1, justifyContent: 'flex-end', paddingBottom: scaleSzie(5) }} >
          <Text style={styles.textMenu} >
            {title}
          </Text>
        </View>
      </Button>
    );
  }


  render() {
    return (
      <View style={styles.container}>
        <View style={styles.containeLogo} >
          <ImageBackground source={SCHOOL} style={{
            flex: 1, paddingTop: scaleSzie(30),
            paddingLeft: scaleSzie(20)
          }} >
            <Text style={{ color: '#fff', fontSize: scaleSzie(30), fontWeight: 'bold' }} >
              NUS Medicine Alumin
              </Text>
          </ImageBackground>
        </View>
        <View style={{ flex: 1 }} >
          {this.renderItemSideVector('home', 'Home', 'HomePage')}
          {this.renderItemSideImage(EVENT, 'Events', { width: scaleSzie(28), height: scaleSzie(28) }, 'Events')}
          {this.renderItemSideImage(NEWS, 'News', { width: scaleSzie(28), height: scaleSzie(28) }, 'News')}
          {this.renderItemSideImage(CHAT, 'Messaging', { width: scaleSzie(28), height: scaleSzie(28) }, 'Messaging')}
          {this.renderItemSideImage(USER_GRADUATION, 'Class Reunion', { width: scaleSzie(28), height: scaleSzie(28) }, 'ClassReunion')}
          {this.renderItemSideVector('hand', 'Giving Portal')}
          {this.renderItemSideVector('info-with-circle', 'Useful Info')}
          {this.renderItemSideImage(CONTACT, 'Contact Us', { width: scaleSzie(28), height: scaleSzie(28) }, 'ContactUs')}

        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  routeName: state.app.routeName
})

export default connectRedux(mapStateToProps, SideMenu);
