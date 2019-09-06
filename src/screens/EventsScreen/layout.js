import React from 'react';
import {
    View,
    Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { WebView } from 'react-native-webview';

import { HeaderScreen, Text, BackgroundView, TextInputCustom, Button, Loading } from '../../components';
import styles from './styles';
import { scaleSzie } from '../../utils/func';
import Configs from '../../configs';


export default class Layout extends React.Component {

    renderFooterWebview() {
        return (
            <View style={{
                width: Configs.FULL_WIDTH, height: scaleSzie(50), backgroundColor: Configs.ORANGE,
                flexDirection: 'row'
            }} >
                <Button onPress={this.backWebview} style={{
                    flex: 1, justifyContent: 'center', alignItems: 'flex-end',
                    paddingRight: scaleSzie(20)
                }} >
                    <Icon name="md-arrow-back" size={32} color="#fff" />
                </Button>
                <Button onPress={this.previousWebview} style={{
                    flex: 1, justifyContent: 'center',
                    paddingLeft: scaleSzie(20)
                }} >
                    <Icon name="md-arrow-forward" size={32} color="#fff" />
                </Button>
                <View style={{ flex: 3, alignItems: 'center', justifyContent: 'center' }} >
                    <Button onPress={this.refreshWebview} >
                        <Icon name="md-refresh" size={32} color="#fff" />
                    </Button>

                </View>
            </View>
        );
    }

    render() {
        return (
            <View style={styles.container}>
                <HeaderScreen
                    navigation={this.props.navigation}
                    menu={true}
                />
                <View style={{ flex: 1 }} >
                    <WebView
                        ref={this.webviewRef}
                        source={{ uri: 'http://nusmedicine.nus.edu.sg/about-the-school/calendar-of-events' }}
                        style={{ flex: 1 }}
                        onLoadEnd={() => this.setState({ loadingWebview: false })}
                    />
                    {this.renderFooterWebview()}
                </View>
                <Loading visible={this.state.loadingWebview} />
            </View>
        );
    }
}