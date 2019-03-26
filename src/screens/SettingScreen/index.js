import Layout from './layout';
import connectRedux from '../../redux/ConnectRedux';

class SettingScreen extends Layout {
    constructor(props) {
        super(props);
        this.changeSettingContact = this.changeSettingContact.bind(this);
        this.changeSettingNoti = this.changeSettingNoti.bind(this);
        this.gotoProfile = this.gotoProfile.bind(this);
    }

    changeSettingContact() {
        const { isContactable, isEnablePopup } = this.props.profile;
        const { dispatch } = this.props.navigation;
        this.props.actions.app.updateProfile({
            isContactable: !isContactable,
            // isEnablePopup
        }, dispatch)
    }

    changeSettingNoti() {
        const { isEnablePopup, isContactable } = this.props.profile;
        const { dispatch } = this.props.navigation;

        this.props.actions.app.updateProfile({
            isEnablePopup: !isEnablePopup,
            // isContactable
        }, dispatch)
    }

    gotoProfile() {
        this.props.navigation.navigate('Profile');
    }

}

const mapStateToProps = state => ({
    isSettingContactable: state.app.isSettingContactable,
    isSettingNoti: state.app.isSettingNoti,
    profile: state.dataLocal.profile,
})

export default connectRedux(mapStateToProps, SettingScreen);