import React from 'react';

import Layout from './layout';

class HomePageScreen extends Layout {
    constructor(props) {
        super(props);

        this.gotoRenuion = this.gotoRenuion.bind(this);
        this.gotoListChat = this.gotoListChat.bind(this);
    }

    gotoRenuion() {
        alert('ddd')
    }

    gotoListChat(){
        this.props.navigation.navigate('Chat');
    }



}


export default HomePageScreen;