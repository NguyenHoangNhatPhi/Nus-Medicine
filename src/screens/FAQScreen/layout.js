import React from 'react';
import {
    View,
    TouchableOpacity,
    Dimensions,
    Platform
} from 'react-native';
import Accordion from 'react-native-collapsible/Accordion';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import HTML from 'react-native-render-html';
import { WebView } from 'react-native-webview';

import { HeaderScreen, Text, ButtonSubmit, TextInputCustom, Button,BackgroundView } from '../../components';
import styles from './styles';
import { scaleSzie } from '../../utils/func';
import Configs from '../../configs';
import { ScrollView } from 'react-native-gesture-handler';
import FAQ from '../../configs/faq';

const SECTIONS = [
    {
        title: 'First',
        content: 'Lorem ipsum...',
    },
    {
        title: 'Second',
        content: 'Lorem ipsum...',
    },
    {
        title: 'Third',
        content: 'Lorem ipsum...',
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
                    <HTML html={section.title}
                        baseFontStyle={{
                            color: '#fff'
                        }}
                        width={Dimensions.get('window').width}
                    />
                </View>
                <View style={{ justifyContent: 'center' }} >
                    <MaterialIcons name="keyboard-arrow-down" size={30} color={'#fff'} />
                </View>
            </View>
        );
    };

    renderContentItemCollap = section => {
        return (
            <View style={[styles.contentItemCollap,{height:section.heightContent}]} >
                <WebView
                    originWhitelist={['*']}
                    source={{ html: section.content }}
                    style={{
                    }}
                    scalesPageToFit={(Platform.OS === 'ios') ? false : true}
                />
            </View>
        );
    };

    updateSections = activeSections => {
        this.setState({ activeSections });
    };

    renderCollapsible() {
        const { activeSections } = this.state;
        return (
            <Accordion
                activeSections={activeSections}
                sections={FAQ}
                renderHeader={this.renderHeaderItemCollap}
                renderContent={this.renderContentItemCollap}
                duration={400}
                onChange={this.updateSections}
                touchableComponent={TouchableOpacity}
                touchableProps={{
                    activeOpacity: 0.5
                }}
            />
        );
    }

    render() {
        return (
            <BackgroundView>
            <View style={styles.container}>
                <HeaderScreen
                    navigation={this.props.navigation}
                />
                <View style={styles.viewOpacity} />
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