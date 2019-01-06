import React from 'react';
import {
    DatePickerIOS,
    DatePickerAndroid
} from 'react-native';

import Layout from './layout';

class ClassReunionScreen extends Layout {
    constructor(props) {
        super(props);
        this.state = {
            chosenDate: new Date(),
            visiblePickerDateIOS: false
        };

        this.showPick = this.showPick.bind(this);
        this.setDate = this.setDate.bind(this);
    }

    setDate(newDate) {
        this.setState({chosenDate: newDate})
      }

    showPick() {
        this.setState({
            visiblePickerDateIOS:true
        })
    }


}


export default ClassReunionScreen;