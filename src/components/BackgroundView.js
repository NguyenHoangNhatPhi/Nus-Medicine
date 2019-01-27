import React from 'react';
import {
    ImageBackground
} from 'react-native';

const BACKGROUND = require('../resources/background.png');

export default class BackgroundView extends React.PureComponent {

    render() {
        return (
            <ImageBackground source={BACKGROUND} style={{ flex: 1 }}>
                {this.props.children}
            </ImageBackground>
        );
    }

}