import React from 'react';
import {
    View,
} from 'react-native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import { NavigationEvents } from 'react-navigation';

import { HeaderScreen, Text, ButtonSubmit, TextInputCustom, BackgroundView, Loading } from '../../components';
import styles from './styles';
import { scaleSzie } from '../../utils/func';

export default class Layout extends React.Component {
    render() {
        return (
            <BackgroundView>
                <NavigationEvents
                    onWillBlur={payload => this.props.actions.app.resetStateSearch()}
                />
                <View style={styles.container}>
                    <HeaderScreen
                        navigation={this.props.navigation}
                    />
                    <View style={{ height: scaleSzie(80), justifyContent: 'center', alignItems: 'center' }} >
                        <Text style={{ color: '#ffffff', fontSize: scaleSzie(18), fontWeight: '400', }} >
                            OTHER ALUMNI
                    </Text>
                    </View>
                    <View style={styles.containerCard} >
                        <View style={styles.containerForm} >
                            <Text style={{
                                fontSize: scaleSzie(18), marginBottom: scaleSzie(20)
                            }} >
                                ALUMNI SEARCH
                        </Text>
                            <TextInputCustom
                                ref={this.searchInputRef}
                                placeholder="Name eg. Janson Tan"
                                onSubmitEditing={this.searchUser}
                            />
                            <View style={{ height: scaleSzie(40), justifyContent: 'center', alignItems: 'center' }} >
                                <Text style={{ color: 'red', fontSize: scaleSzie(14), fontWeight: 'bold' }} >
                                    {this.props.messageSearchUserChat}
                                </Text>
                            </View>
                            <View>
                                <ButtonSubmit
                                    onPress={this.searchUser}
                                    title="Search"
                                />
                                <View style={{ position: 'absolute', left: scaleSzie(15), top: scaleSzie(15) }} >
                                    <EvilIcons name="search" size={25} color='#fff' />
                                </View>
                            </View>

                        </View>
                    </View>
                </View>
                <Loading visible={this.props.isLoadingSearchUser} />
            </BackgroundView>
        );
    }
}