import React from 'react';

import Layout from './layout';

class HomePageScreen extends Layout {
    constructor(props) {
        super(props);

        this.gotoListChat = this.gotoListChat.bind(this);
    }

    gotoRenuion(type) {
       if(type==='GIVING'){
        this.props.navigation.navigate('Giving');
       }
    }

    gotoListChat(){
        this.props.navigation.navigate('Chat');
    }



}


export default HomePageScreen;