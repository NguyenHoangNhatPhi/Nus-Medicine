import React from 'react';
import {
    View,
    DatePickerIOS,
    Platform
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { HeaderScreen, Text, ModalCustom, Button, BackgroundView } from '../../components';
import styles from './styles';
import { scaleSzie } from '../../utils/func';
import Configs from '../../configs';
import { ScrollView } from 'react-native-gesture-handler';

export default class Layout extends React.Component {

    renderFooter() {
        const { chosenDate } = this.state;
        return (
            <View style={styles.containerFooter} >
                <View style={styles.footer} >
                    <View style={styles.boxdateSelect} >
                        <Text style={{ fontSize: scaleSzie(18), color: 'rgb(199,199,199)' }} >
                            {`Date: ${chosenDate}`}
                        </Text>
                    </View>
                    <View style={{ width: scaleSzie(10) }} />
                    <Button onPress={this.showPick} style={styles.containerPick} >
                        <View style={{ justifyContent: 'center' }} >
                            <Ionicons name="md-calendar" size={25} color="#fff" />
                        </View>
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} >
                            <Text style={{ color: '#fff', fontSize: scaleSzie(18), fontWeight: '600' }} >
                                Pick
                        </Text>
                        </View>
                    </Button>
                </View>
            </View>
        );
    }

    renderPickerDateIOS() {
        if (Platform.OS === 'ios') {
            const { visiblePickerDateIOS } = this.state;
            return (
                <ModalCustom
                    transparent={true}
                    visible={visiblePickerDateIOS}
                    onRequestClose={() => this.setState({ visiblePickerDateIOS: false })}
                    style={{ justifyContent: 'flex-end' }}
                >
                    <View style={styles.containerModal} >
                        <View style={{ justifyContent: 'center', alignItems: 'center', height: scaleSzie(60) }} >
                            <Text style={{ fontSize: scaleSzie(20), fontWeight: '600', color: Configs.COLOR_MAIN_APP }}  >
                                Select Date
                        </Text>
                        </View>
                        <View style={{ flex: 1, justifyContent: 'center' }} >
                            <DatePickerIOS
                                mode='date'
                                date={this.state.chosenDate}
                                onDateChange={this.setDate}
                                maximumDate={new Date('03/25/2025')}
                            />
                        </View>

                    </View>

                </ModalCustom>
            );
        }
        return null;

    }

    render() {
        return (
            <BackgroundView>
                <View style={styles.container}>
                    <HeaderScreen
                        navigation={this.props.navigation}
                    />
                    <View style={{ height: scaleSzie(80), justifyContent: 'center', alignItems: 'center' }} >
                        <Text style={{ color: '#ffffff', fontSize: scaleSzie(18), fontWeight: '400', }} >
                            CLASS REUNION CONCIERGE
                    </Text>
                    </View>
                    <View style={styles.containerCard} >
                        <View style={styles.containerForm} >
                            <Text style={[styles.textContent, { marginBottom: scaleSzie(30) }]} >
                                NUS Medicine offers a wide range of reunion
                                services especially customised to support your
                                class reunion.
                        </Text>
                            <Text style={styles.textContent} >
                                Let us know your reunion date and we will
                                contact you shortly
                        </Text>
                            <View style={{ height: scaleSzie(20) }} />
                            {this.renderFooter()}
                        </View>
                    </View>
                    {this.renderPickerDateIOS()}
                </View>
            </BackgroundView>
        );
    }
}