import React from 'react';

import Layout from './layout';

class HomePageScreen extends Layout {
    constructor(props) {
        super(props);

        this.gotoRenuion = this.gotoRenuion.bind(this);
    }

    gotoRenuion() {
        alert('ddd')
    }



}


export default HomePageScreen;