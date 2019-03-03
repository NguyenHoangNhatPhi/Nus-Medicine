import React from 'react';

import Layout from './layout';
import { openBrowser } from '../../utils/func';

class UseFulInfoScreen extends Layout {
    constructor(props) {
        super(props);
        this.state = {
            activeSections: []
        }
    }

    openWebview(url) {
        openBrowser(url)
    }


}


export default UseFulInfoScreen;