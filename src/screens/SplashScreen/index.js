import _ from 'ramda';
import { timer } from 'rxjs';

import Layout from './layout';
import connectRedux from '../../redux/ConnectRedux';
import { from } from 'rxjs';

class SplashScreen extends Layout {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    componentDidMount() {
        const { profile, navigation } = this.props;
        const handleLogic = timer(500);
        handleLogic.subscribe(val => {
            if (_.isEmpty(profile)) {
                navigation.navigate('Auth');
            } else {
                navigation.navigate('Main');
            }
        })
    }


}

const mapStateToProps = state => ({
    profile: state.dataLocal.profile,
})



export default connectRedux(mapStateToProps, SplashScreen);