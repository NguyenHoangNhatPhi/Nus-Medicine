import Layout from './layout';
import connectRedux from '../../redux/ConnectRedux';

class ProfileScreen extends Layout {
    constructor(props) {
        super(props);
        this.state ={
            disableEditProfile :true
        }
        this.changeSettingContact = this.changeSettingContact.bind(this);
        this.changeSettingNoti = this.changeSettingNoti.bind(this);
        this.editProfile = this.editProfile.bind(this);
        this.cancleEditProfile = this.cancleEditProfile.bind(this);
        this.submitEditProfile = this.submitEditProfile.bind(this);
        this.gotoChangePassword = this.gotoChangePassword.bind(this);
    }

    changeSettingContact() {
        const { isSettingContactable } = this.props;
        this.props.actions.app.changeSettingContact(isSettingContactable);
    }

    changeSettingNoti() {
        const { isSettingNoti } = this.props;
        this.props.actions.app.changeSettingNoti(isSettingNoti);
    }

    editProfile() {
        this.setState({
            disableEditProfile:false
        })
    }

    cancleEditProfile(){
        this.setState({
            disableEditProfile:true
        })
    }

    submitEditProfile(){
        this.setState({
            disableEditProfile:true
        })
    }

    gotoChangePassword(){
        this.props.navigation.navigate('ChangePassword');
    }


}

const mapStateToProps = state => ({
    isSettingContactable: state.app.isSettingContactable,
    isSettingNoti: state.app.isSettingNoti
})



export default connectRedux(mapStateToProps, ProfileScreen);