import Layout from './layout';
import connectRedux from '../../redux/ConnectRedux';

class SettingScreen extends Layout {
    constructor(props) {
        super(props);
        this.changeSettingContact = this.changeSettingContact.bind(this);
        this.changeSettingNoti = this.changeSettingNoti.bind(this);
        this.gotoProfile= this.gotoProfile.bind(this);
    }

    changeSettingContact() {
        const { isSettingContactable } = this.props;
        this.props.actions.app.changeSettingContact(isSettingContactable);
    }

    changeSettingNoti() {
        const { isSettingNoti } = this.props;
        this.props.actions.app.changeSettingNoti(isSettingNoti);
    }

    gotoProfile(){
        this.props.navigation.navigate('Profile');
    }

}

const mapStateToProps = state => ({
    isSettingContactable: state.app.isSettingContactable,
    isSettingNoti: state.app.isSettingNoti,
    profile: state.dataLocal.profile,
})

export default connectRedux(mapStateToProps, SettingScreen);