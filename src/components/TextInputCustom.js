import React from 'react';
import { View, TextInput } from 'react-native';

import { scaleSzie } from '../utils/func';
import Configs from '../configs';
import commonStyles from '../commonStyles';
import Text from './Text';
import Button from './Button';

export default class TextInputCustom extends React.PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };
        this.onChangeText = this.onChangeText.bind(this);
        this.onSubmitEditing = this.onSubmitEditing.bind(this);
        this.textinputRef = React.createRef();
        this.onFocus = this.onFocus.bind(this);
    }

    onFocus() {
        if (this.props.onFocus) {
            this.props.onFocus();
        }

    }

    onChangeText(value) {
        this.setState({
            value
        })
    }

    onSubmitEditing() {
        this.props.onSubmitEditing();
    }

    onFocusTextInput() {
        this.textinputRef.current.focus();
    }

    render() {
        const { placeholder, keyboardType, secureTextEntry, maxLength } = this.props;
        const { value } = this.state;
        return (
            <View style={[{
                height: scaleSzie(55), borderRadius: scaleSzie(4), borderWidth: scaleSzie(1),
                paddingHorizontal: scaleSzie(15), borderColor: Configs.ORANGE
            }]} >
                <TextInput
                    ref={this.textinputRef}
                    value={value}
                    placeholder={placeholder}
                    onChangeText={this.onChangeText}
                    onSubmitEditing={this.onSubmitEditing}
                    style={{
                        flex: 1
                    }}
                    keyboardType={keyboardType || "default"}
                    secureTextEntry={secureTextEntry}
                    maxLength={maxLength}
                    onFocus={this.onFocus}

                />

            </View>
        );
    }

}