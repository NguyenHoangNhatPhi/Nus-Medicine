import React, { Component } from 'react';
import ReactNative, { TextInput, Platform, NativeModules, View, Animated,Text } from 'react-native';
import PropTypes from 'prop-types';

import { scaleSzie } from '../utils/func';
import Configs from '../configs';

const ANDROID_PLATFORM = (Platform.OS === 'android');
const AutoGrowTextInputManager = NativeModules.AutoGrowTextInputManager;

export default class AutoGrowingTextInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      focused: false,
      text: this.props.value
    };
    this.setNativeProps = this.setNativeProps.bind(this);
  }

  componentDidMount() {
    if (this.shouldApplyNativeSettings()) {
      const reactTag = this.textInputReactTag();
      if (reactTag) {
        AutoGrowTextInputManager.applySettingsForInput(reactTag, {
          enableScrollToCaret: this.props.enableScrollToCaret,
          maxHeight: this.props.maxHeight
        });
      }
    }
  }

  componentWillUnmount() {
    if (this.shouldApplyNativeSettings()) {
      const reactTag = this.textInputReactTag();
      if (reactTag) {
        AutoGrowTextInputManager.performCleanupForInput(reactTag);
      }
    }
  }

  shouldApplyNativeSettings() {
    return AutoGrowTextInputManager && (ANDROID_PLATFORM || this.props.enableScrollToCaret);
  }

  textInputReactTag() {
    if (this._textInput) {
      return ReactNative.findNodeHandle(this._textInput);
    }
  }

  render() {
    const { disable } = this.props;
    const temptBorder = !disable ? {
      borderBottomColor: this.labelStyle(),
      borderBottomWidth: 0.5
    } : {}
    return (
      <View style={[temptBorder, this.props.styleContainer]} >
        <FloatingLabel visible={this.state.text}>
          <Text  style={[{
            color: 'rgb(33,33,33)',
            fontSize: scaleSzie(12),fontWeight:'600'
          }]}>{this.placeholderValue()}</Text>
        </FloatingLabel>
        <View style={{
          ...Platform.select({
            ios: {
              height: scaleSzie(18),
            },
            android: {
              height: scaleSzie(18)
            }
          }),
        }} />
        <TextInput
          multiline
          {...this.props} {...this.style}
          style={[ { height: 'auto' },
          {
            ...Platform.select({
              android: {
                margin: 0,
                padding: 0
              }
            }),
            fontSize: scaleSzie(14),
            color: '#868686',
          },this.props.styleTextInput
          ]}
          ref={(r) => { this._textInput = r; }}
          value={this.state.text}
          onChangeText={(value) => this.setText(value)}
          onFocus={() => this.setFocus()}
          onBlur={() => this.unsetFocus()}
          placeholderTextColor="#A2A2A2"
          placeholderStyle={{ fontWeight: 'bold' }}
          editable={!disable}
        />
        <View style={{
          height: scaleSzie(5)
        }} />
      </View>
    );
  }

  setText(value) {
    this.setState({
      text: value
    });
    try {
      return this.props.onChangeTextValue(value);
    } catch (_error) { }
  }

  labelStyle() {
    if (this.state.focused) {
      return 'rgb(0,127,122)';
    }
    return Configs.ORANGE;
  }

  placeholderValue() {
    if (this.state.text) {
      return this.props.placeholder;
    }
  }

  setFocus() {
    this.setState({
      focused: true
    });
    try {
      return this.props.onFocus();
    } catch (_error) { }
  }

  unsetFocus() {
    this.setState({
      focused: false
    });
    try {
      return this.props.onBlur();
    } catch (_error) { }
  }

  setNativeProps(nativeProps = {}) {
    this._textInput.setNativeProps(nativeProps);
  }

  resetHeightToMin() {
    this.setNativeProps({ text: '' });
  }

  clear() {
    if (ANDROID_PLATFORM) {
      // fix for predictive text issues can be removed once https://github.com/facebook/react-native/pull/12462 is merged
      AutoGrowTextInputManager.resetKeyboardInput(ReactNative.findNodeHandle(this._textInput))
    }
    return this._textInput.clear();
  }

  focus() {
    return this._textInput.focus();
  }

  blur() {
    this._textInput.blur();
  }

  isFocused() {
    return this._textInput.isFocused();
  }

  getRef() {
    return this._textInput;
  }
}

AutoGrowingTextInput.propTypes = {
  ...TextInput.propTypes,
  enableScrollToCaret: PropTypes.bool,
};
AutoGrowingTextInput.defaultProps = {
  ...TextInput.defaultProps,
  enableScrollToCaret: false,
};


class FloatingLabel extends Component {
  constructor(props) {
    super(props);

    let initialPadding = 9;
    let initialOpacity = 0;

    if (this.props.visible) {
      initialPadding = 5;
      initialOpacity = 1;
    }

    this.state = {
      paddingAnim: new Animated.Value(initialPadding),
      opacityAnim: new Animated.Value(initialOpacity)
    }
  }

  componentWillReceiveProps(newProps) {
    Animated.timing(this.state.paddingAnim, {
      toValue: newProps.visible ? 5 : 9,
      duration: 230
    }).start();

    return Animated.timing(this.state.opacityAnim, {
      toValue: newProps.visible ? 1 : 0,
      duration: 230
    }).start();
  }

  render() {
    return (
      <Animated.View style={[{
        position: 'absolute',
        top: 0,
        left: 0
      }, { paddingTop: this.state.paddingAnim, opacity: this.state.opacityAnim }]}>
        {this.props.children}
      </Animated.View>
    );
  }
}