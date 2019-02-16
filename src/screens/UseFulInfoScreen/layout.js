import React from 'react';
import {
    View,
    TouchableOpacity,
    Dimensions,
    WebView,
    Platform
} from 'react-native';
import Accordion from 'react-native-collapsible/Accordion';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import HTML from 'react-native-render-html';
import HTMLView from 'react-native-htmlview';

import { HeaderScreen, Text, ButtonSubmit, TextInputCustom, Button, BackgroundView } from '../../components';
import styles from './styles';
import { scaleSzie } from '../../utils/func';
import Configs from '../../configs';
import { ScrollView } from 'react-native-gesture-handler';
import FAQ from '../../configs/faq';

const SECTIONS = [
    {
        title: 'Programmes',
        chidlren: [
            'Undergraduate',
            'Graduate Programme',
            'Graduate Research Programmer'
        ]
    },
    {
        title: 'Life-Long Learning',
        chidlren: [
            'Undergraduate',
            'Graduate Programme',
            'Graduate Research Programmer'
        ]
    },

];

export default class Layout extends React.Component {

    renderHeaderItemCollap = (section, index) => {
        const temptBorderTop = index === 0 ? null : {
            borderTopWidth: scaleSzie(2),
            borderTopColor: 'rgba(256,256,256,0.2)',
        }
        return (
            <View style={[styles.headerItemCollap, temptBorderTop]}  >
                <View style={{ flex: 1, justifyContent: 'center' }} >
                    <Text style={{ color: '#fff', fontSize: scaleSzie(16), fontWeight: 'bold' }} >
                        {section.title}
                    </Text>
                </View>
                <View style={{ justifyContent: 'center' }} >
                    <MaterialIcons name="keyboard-arrow-down" size={30} color={'#fff'} />
                </View>
            </View>
        );
    };

    renderContentItemCollap = section => {
        return (
            <View style={[styles.contentItemCollap,]} >
                {
                    section.chidlren.map((item,index) => this.renderItemUseful(item,index) )
                }
            </View>
        );
    };

    renderItemUseful(item,index){
        return(
            <View key={index} style={[{height:scaleSzie(40),backgroundColor:'#fff',marginBottom:1,justifyContent:'center'},
            styles.boderItem
            ]} >
                <Text style={{color:'rgb(0,51,91)',marginLeft:scaleSzie(28)}} >
                    {item}
                </Text>
            </View>
        );
    }

    updateSections = activeSections => {
        this.setState({ activeSections });
    };

    renderCollapsible() {
        const { activeSections } = this.state;
        return (
            <View style={{ paddingHorizontal: scaleSzie(30), }} >
                <View style={{ flex: 1, backgroundColor: 'rgb(5,53,126)' }} >
                    <Accordion
                        activeSections={activeSections}
                        sections={SECTIONS}
                        renderHeader={this.renderHeaderItemCollap}
                        renderContent={this.renderContentItemCollap}
                        duration={400}
                        onChange={this.updateSections}
                        touchableComponent={TouchableOpacity}
                        touchableProps={{
                            activeOpacity: 0.5
                        }}
                    />
                </View>

            </View>
        );
    }

    render() {
        return (
            <BackgroundView>
                <View style={styles.container}>
                    <HeaderScreen
                        navigation={this.props.navigation}
                    />
                    <View style={{ height: scaleSzie(80), justifyContent: 'center', alignItems: 'center' }} >
                        <Text style={{ color: '#ffffff', fontSize: scaleSzie(18), fontWeight: '600', }} >
                            USEFUL INFO
                    </Text>
                    </View>
                    <View style={{ flex: 1 }} >
                        <ScrollView>
                            {this.renderCollapsible()}
                        </ScrollView>
                    </View>
                </View>
            </BackgroundView>
        );
    }
}