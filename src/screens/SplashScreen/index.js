import Layout from './layout';
import connectRedux from '../../redux/ConnectRedux';

class SplashScreen extends Layout {
    
    constructor(props) {
        super(props);
        this.state = {
        }
    }


}

const mapStateToProps = state => ({
    isSettingContactable: state.app.isSettingContactable,
    isSettingNoti: state.app.isSettingNoti
})



export default connectRedux(mapStateToProps, SplashScreen);