import React from 'react';

import Layout from './layout';
import connectRedux from '../../redux/ConnectRedux';

class ListChatScreen extends Layout {
    constructor(props) {
        super(props);
    }

}

const mapStateToProps = state => ({
})

export default connectRedux(mapStateToProps, ListChatScreen);
