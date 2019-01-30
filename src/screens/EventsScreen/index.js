import React from 'react';
import {timer} from 'rxjs';

import Layout from './layout';

class EventsScreen extends Layout {
    constructor(props) {
        super(props);
        this.state ={
            loadingWebview: true
        }
    }

    componentDidMount(){
        const source = timer(5000);
        source.subscribe(x =>{
            this.setState({
                loadingWebview:false
            })
        })
    }

}


export default EventsScreen;