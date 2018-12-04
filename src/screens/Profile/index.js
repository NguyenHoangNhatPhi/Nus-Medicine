import Layout from './layout';

class ProfileScreen extends Layout {
    constructor(props) {
        super(props);
        this.gotoDetail = this.gotoDetail.bind(this);
        console.log('constructor Home')
    }

    static getDrivedStateFromProps(props, state) {
        console.log('getDrivedStateFromProps Home')
        return null;
    }

    componentDidMount() {
        console.log('componentDidMount Home')
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate Home')
        return true
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate Home ')
    }

    componentWillUnmount() {
        console.log('componentWillUnmount Home')
    }

    gotoDetail() {
        this.props.navigation.push('Detail')
    }

}


export default ProfileScreen;