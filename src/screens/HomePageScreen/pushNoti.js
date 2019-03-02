import { Alert } from 'react-native';
import PushNotification from 'react-native-push-notification';

import Layout from './layout';
import connectRedux from '../../redux/connectRedux';
import CallPhone from '@core/utils/callPhone';
import { getPosotion } from '@core/utils/func';

class HomeScreen extends Layout {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      sort: 0,
      visiblePopUpPhone: false,
      phone: '',
      currentTab: 0
    };
  }

  async componentDidMount() {
    this.pushNotification = this.setupPushNotification(this._handleNotificationOpen);
    try {
      const position = await getPosotion();
      this.props.actions.app.getListBusinessEvaluate(position.coords.latitude, position.coords.longitude);
      this.props.actions.map.setYourLocation({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
      })
    } catch (error) {
      console.log('error : ', error)
    }
  }

  setupPushNotification = async handleNotification => {
    await PushNotification.configure({
      onRegister: token => {
        let body = {
          app_type: 'evaluates',
          os_platform: 'ios',
          evaluates_push_token: token.token
        };
        this.props.actions.auth.updateEndPointPushNoti(body);
      },
      onNotification: notification => {
        console.log('NOTIFICATION:', notification);

        if (notification.foreground) {
          if (notification.userInteraction) {
            console.log('NOTIFICATION touched:', notification);
          } else {
            console.log('NOTIFICATION foreground userInteraction:', notification.userInteraction);
          }
        } else {
          if (notification.userInteraction) {
            console.log('NOTIFICATION touched:', notification);
            handleNotification(notification);
          } else {
            console.log('NOTIFICATION userInteraction:', notification.userInteraction);
            handleNotification(notification);
          }
        }
        notification.finish(PushNotificationIOS.FetchResult.NoData);
      },
      senderID: '829861433599',
      permissions: {
        alert: true,
        badge: true,
        sound: true
      },
      popInitialNotification: true,
      requestPermissions: true
    });
    return PushNotification;
  };

  _handleNotificationOpen = notification => {
    let notis = null;
    if (notification.data) {
      notis = notification.data;
    } else {
      notis = notification;
    }
    const { navigate } = this.props.navigation;
  };

  mapNavigateToScreen = (navigate, notification) => {
    let routeName = '';
    switch (parseInt(notification.type)) {
      case 1:
        routeName = 'Detail';
        break;
      default:
        routeName = 'Home';
    }
    navigate(routeName, {
      type: 'Navigate',
      routeName: routeName,
      params: {
        itemtype: parseInt(notification.parentid)
      }
    });
  };

  selectCondiSort = (sort) => {
    this.setState({
      sort
    });
  }

  gotoSearch = () => {
    if (this.state.currentTab !== 2) {
      this.props.navigation.navigate('Search');
    } else {
      Alert.alert(
        'Thông báo',
        'Chức năng này không có trong màn hình đã thẩm !',
        [

          { text: 'OK', onPress: () => { } },
        ],
        { cancelable: false },
      );
    }

  }

  gotoMap = () => {
    if (this.state.currentTab !== 2) {
      this.props.navigation.navigate('Map');
    } else {
      Alert.alert(
        'Thông báo',
        'Chức năng này không có trong màn hình đã thẩm !',
        [

          { text: 'OK', onPress: () => { } },
        ],
        { cancelable: false },
      );
    }

  }

  gotoProfile = () => {
    this.props.navigation.navigate('Profile');
  }

  gotoNoti = () => {
    this.props.navigation.navigate('Notification');
  }

  gotoSort = () => {
    this.setState({
      visible: true
    });
  }

  onRequestClose = () => {
    this.setState({
      visible: false
    });
  }

  callPhone = () => {
    const args = {
      number: this.state.phone,
      prompt: false
    };
    CallPhone(args)
      .then(this.hidePopupCall)
      .catch(console.error);
  }

  hidePopupCall = () => {
    this.setState({
      visiblePopUpPhone: false
    });
  }

  showPopupPhone = async (phone) => {
    await this.setState({
      phone
    });
    await this.setState({
      visiblePopUpPhone: true,
    });

  }

  componentWillUnmount() { }
}

const mapStateToProps = state => {
  return {
    isLoadingGetListBusinessEvaluate: state.app.isLoadingGetListBusinessEvaluate,
    listtBusinessEvaluate: state.app.listtBusinessEvaluate
  };
};

export default connectRedux(mapStateToProps, HomeScreen);