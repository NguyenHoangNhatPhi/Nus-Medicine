import React from 'react';
import {
    View,
    Dimensions,
    ActivityIndicator,
    Image,
    Text
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { GiftedChat } from '../../components/react-native-gifted-chat';
// import EmojiPicker from '../../components/Emoji';

import { Button, BackgroundView, Loading } from '../../components';
import styles from './styles';
import { scaleSzie ,isIphoneX} from '../../utils/func';
import Configs from '../../configs';

const USER_GRADUATION = require('../../resources/graduation.png');
const AVATAR = require('../../resources/avatarChat.png');

const { width, height } = Dimensions.get('window');

export default class Layout extends React.Component {

    renderLoadMoreMessage = () => {
        if (this.props.isLoadingEarlier) {
            return (
                <View style={{ width, alignItems: 'center' }} >
                    <ActivityIndicator
                        size={"large"}
                        color="#fff"
                    />
                </View>
            );
        }
        return <View />
    }

    render() {
        const { value, visibleEmoji } = this.state;
        const {currentUserChat} = this.props;
        const heightHeader = isIphoneX() ? 95 : 60;
        return (
            <BackgroundView>
                <View style={styles.container}>
                    <View style={{ width, height: scaleSzie(heightHeader), backgroundColor: '#ffffff', flexDirection: 'row' }} >
                        <View style={{ flex: 1, justifyContent: 'flex-end', paddingBottom: scaleSzie(10), paddingLeft: scaleSzie(12) }} >
                            <Button onPress={this.back} >
                                <MaterialIcons name={'arrow-back'} size={scaleSzie(30)} color="#000" />
                            </Button>

                        </View>
                        <View style={{ flex: 5, alignItems: 'center',
                    flexDirection:'row'
                    }} >
                            <FontAwesome  name={'wechat'} size={scaleSzie(30)} color="#F97300" />
                            <Text style={{marginLeft:scaleSzie(10),fontWeight:'600'}} >
                                {currentUserChat.fullname}
                            </Text>
                        </View>
                        <View style={{ flex: 1 }} >

                        </View>
                    </View>
                    <View style={styles.containerContent} >
                        <GiftedChat
                            messages={this.props.messages}
                            onSend={this.onSend}
                            user={{
                                _id: 1,
                            }}
                            onInputTextChanged={this.onChangeMessage}
                            text={value}
                            showEmotion={this.showshowEmotion}
                            hideEmoji={this.hideEmoji}
                            listViewProps={
                                {
                                    onEndReached: this.loadmoreMessage,
                                    onEndReachedThreshold: 100,
                                    ListFooterComponent: this.renderLoadMoreMessage
                                }
                            }
                            renderAvatar={() => <Image source={AVATAR} style={{ width: scaleSzie(36), height: scaleSzie(36) }} />}
                        />
                        {/* <EmojiPicker
                            ref={this.emojiRef}
                            onPick={this.addEmoji}
                        /> */}
                    </View>
                </View>
                <Loading visible={this.props.loadingGetHistory} />
            </BackgroundView>
        );
    }
}