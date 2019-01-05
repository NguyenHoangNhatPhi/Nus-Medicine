import React from 'react';

import Layout from './layout';

class AuthScreen extends Layout {
    constructor(props) {
        super(props);

        this.register = this.register.bind(this);
        this.login = this.login.bind(this);
        this.faq = this.faq.bind(this);
    }

    register() {
    }

    login(){
        this.props.navigation.navigate('Login')
    }

    faq(){

    }

}


export default AuthScreen;