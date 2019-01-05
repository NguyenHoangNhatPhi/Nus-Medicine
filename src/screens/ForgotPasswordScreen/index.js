import React from 'react';

import Layout from './layout';

class ForgotPasswordScreen extends Layout {
    constructor(props) {
        super(props);

        this.emailInputRef = React.createRef();

        this.resetPassword = this.resetPassword.bind(this);
    }

    resetPassword(){
        alert('ddd')
    }


}


export default ForgotPasswordScreen;