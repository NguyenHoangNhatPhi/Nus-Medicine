import Layout from './layout';
import connectRedux from '../../redux/ConnectRedux';

class SettingScreen extends Layout {
    constructor(props) {
        super(props);
        this.changeSettingContact = this.changeSettingContact.bind(this);
        this.changeSettingNoti = this.changeSettingNoti.bind(this);
    }

    changeSettingContact() {
        const { isSettingContactable } = this.props;
        this.props.actions.app.changeSettingContact(isSettingContactable);
    }

    changeSettingNoti() {
        const { isSettingNoti } = this.props;
        this.props.actions.app.changeSettingNoti(isSettingNoti);
    }

}

const mapStateToProps = state => ({
    isSettingContactable: state.app.isSettingContactable,
    isSettingNoti: state.app.isSettingNoti
})

export default connectRedux(mapStateToProps, SettingScreen);