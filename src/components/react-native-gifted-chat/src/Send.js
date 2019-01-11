/* eslint no-use-before-define: ["error", { "variables": false }] */

import PropTypes from 'prop-types';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, ViewPropTypes } from 'react-native';
import Color from './Color';

import { scaleSzie } from '../../../utils/func';
import Configs from '../../../configs';

export default function Send({ text, containerStyle, onSend, children, textStyle, label, alwaysShowSend }) {
  const temptColorButtonSend= text.trim().length > 0 ? Configs.ORANGE :'grey';
  const temptActiveOpacity = text.trim().length > 0 ? 0.5 : 1;
    return (
      <TouchableOpacity
        testID="send"
        accessible
        accessibilityLabel="send"
        style={[styles.container, containerStyle]}
        onPress={() => {
          if(text.trim().length > 0){
            onSend({ text: text.trim() }, true);
          }
          
        }}
        activeOpacity={temptActiveOpacity}
        accessibilityTraits="button"
      >
        {/* <View>{children || <Text style={[styles.text, textStyle]}>{`label`}</Text>}</View> */}
        <View>{children || <View style={{
          width: scaleSzie(100), height: scaleSzie(50),
          paddingHorizontal: scaleSzie(10), paddingVertical: (10)
        }} >
          <View style={{
            flex: 1, backgroundColor: temptColorButtonSend, justifyContent: 'center',
            borderRadius: scaleSzie(4),
            alignItems: 'center'
          }} >
            <Text style={[styles.text, textStyle, { color: '#fff' }]}>{label}</Text>
          </View>

        </View>}</View>

      </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
  container: {
    height: 44,
    justifyContent: 'flex-end',
  },
  text: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: scaleSzie(15),
  },
});

Send.defaultProps = {
  text: '',
  onSend: () => { },
  label: 'Send',
  containerStyle: {},
  textStyle: {},
  children: null,
  alwaysShowSend: false,
};

Send.propTypes = {
  text: PropTypes.string,
  onSend: PropTypes.func,
  label: PropTypes.string,
  containerStyle: ViewPropTypes.style,
  textStyle: Text.propTypes.style,
  children: PropTypes.element,
  alwaysShowSend: PropTypes.bool,
};
