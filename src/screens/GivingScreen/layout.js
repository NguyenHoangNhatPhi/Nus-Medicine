import React from 'react';
import {
    View,
    Image,
    WebView
} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';

import { HeaderScreen, Text, BackgroundView, TextInputCustom, Button, Loading } from '../../components';
import styles from './styles';
import { scaleSzie } from '../../utils/func';
import Configs from '../../configs';


export default class Layout extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <HeaderScreen
                    navigation={this.props.navigation}
                    menu={true}
                />
                <View style={{ flex: 1 }} >
                    <WebView
                        source={{ uri: 'https://nusmedicine.nus.edu.sg/giving/' }}
                        style={{ flex: 1 }}
                        onLoadEnd={() => this.setState({ loadingWebview: false })}
                    />
                </View>
                <Loading visible={this.state.loadingWebview} />
            </View>
        );
    }
}