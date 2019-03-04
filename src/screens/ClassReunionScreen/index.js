import React from 'react';
import {
    DatePickerIOS,
    DatePickerAndroid,
    Platform
} from 'react-native';

import Layout from './layout';
import connectRedux from '../../redux/ConnectRedux';


class ClassReunionScreen extends Layout {
    constructor(props) {
        super(props);
        this.state = {
            chosenDate: this.formatDate(new Date()),
            chosenDateIOS: new Date(),
            visiblePickerDateIOS: false
        };

        this.showPick = this.showPick.bind(this);
        this.setDate = this.setDate.bind(this);
    }

    setDate(newDate) {
        this.setState({ chosenDateIOS: newDate });
        this.setState({
            chosenDate: this.formatDate(newDate)
        })
    }

    pickAppoitment = () => {
        this.props.actions.app.requestReunion(this.state.chosenDate);
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
                        chosenDate: `${day}/${month + 1}/${year}`
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

    formatDate(temptDate) {
        const temptDD = temptDate.getDate() < 10 ? `0${temptDate.getDate()}` : temptDate.getDate();
        const temptMM = (temptDate.getMonth() + 1) < 10 ? `0${temptDate.getMonth() + 1}` : (temptDate.getMonth() + 1);
        return `${temptDD}/${temptMM}/${temptDate.getFullYear()}`
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.requestSucces && prevProps.isLoadingRequestReunion !== this.props.isLoadingRequestReunion) {
            this.props.navigation.navigate('RenionSuccess');
        }
    }

}

const mapStateToProps = state => ({
    isLoadingRequestReunion: state.app.isLoadingRequestReunion,
    messageRequestReunion: state.app.messageRequestReunion,
    requestSucces: state.app.requestSucces
})

export default connectRedux(mapStateToProps, ClassReunionScreen);