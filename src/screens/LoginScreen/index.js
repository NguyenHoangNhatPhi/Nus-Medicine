
import Layout from './layout';

class LoginScreen extends Layout {
    constructor(props) {
        super(props);
        this.login = this.login.bind(this);
    }

    login(){
        alert('ddd')
    }


}


export default LoginScreen;