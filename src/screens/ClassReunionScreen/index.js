import React from 'react';
import {
    DatePickerIOS,
    DatePickerAndroid,
    Platform
} from 'react-native';

import Layout from './layout';

class ClassReunionScreen extends Layout {
    constructor(props) {
        super(props);
        this.state = {
            chosenDate: this.formatDate(new Date()),
            visiblePickerDateIOS: false
        };

        this.showPick = this.showPick.bind(this);
        this.setDate = this.setDate.bind(this);
    }

    setDate(newDate) {
        this.setState({ chosenDate: newDate })
    }

  async  showPick() {
        if (Platform.OS === 'android') {
            try {
                const { action, year, month, day } = await DatePickerAndroid.open({
                    // Use `new Date()` for current date.
                    // May 25 2020. Month 0 is January.
                    date: new Date()
                });
                if (action !== DatePickerAndroid.dismissedAction) {
                    // Selected year, month (0-11), day
                    this.setState({
                        chosenDate:`${day}/${month+1}/${year}`
                    })
                }
            } catch ({ code, message }) {
                console.warn('Cannot open date picker', message);
            }
        } else {
            this.setState({
                visiblePickerDateIOS: true
            })
        }

    }

    componentDidMount(){
    }

    formatDate(temptDate){
        return `${temptDate.getDate()}/${temptDate.getMonth()+1}/${temptDate.getFullYear()}`
    }

}


export default ClassReunionScreen;