import React from 'react';
import {
    View,
    Text,
    Button,
    StatusBar,
    StyleSheet
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default class Layout extends React.Component {

    render() {
        return (
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={styles.linearGradient}>
                    <Text style={styles.buttonText}>
                        Sign in with Facebook
  </Text>
                </LinearGradient>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    linearGradient: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5
    },
    buttonText: {
        fontSize: 18,
        fontFamily: 'Gill Sans',
        textAlign: 'center',
        margin: 10,
        color: '#ffffff',
        backgroundColor: 'transparent',
    },
});