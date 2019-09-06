import React from 'react';
import { timer } from 'rxjs';

import Layout from './layout';

class NewsScreen extends Layout {
    constructor(props) {
        super(props);
        this.state = {
            loadingWebview: true
        };
        this.webviewRef = React.createRef();
    }

    componentDidMount() {
        this.initLoading();
    }

    initLoading() {
        const source = timer(5000);
        source.subscribe(x => {
            this.setState({
                loadingWebview: false
            })
        })
    }

    backWebview = () => {
        this.webviewRef.current.goBack();
    }

    previousWebview = () => {
        this.webviewRef.current.goForward();
    }

    refreshWebview = () => {
        // this.webviewRef.current.reload(); 
        // this.webviewRef.current.reload()
        console.log(this.webviewRef.current);

    }

}


export default NewsScreen;