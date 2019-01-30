import React from 'react';

import Layout from './layout';

class EventsScreen extends Layout {
    constructor(props) {
        super(props);
        this.state ={
            loadingWebview: true
        }
    }

}


export default EventsScreen;