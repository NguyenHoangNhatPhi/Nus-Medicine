/** @format */
import React from 'react'
import { AppRegistry, View } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';

import AppNavigators from './src/navigators/AppNavigator';
import configureStore from './src/redux/store';
import { name as appName } from './app.json';


class App extends React.Component {

    constructor(props) {
        super(props);
        const { persistor, store } = configureStore();
        this.state = {
            persistor,
            store,
        }
    }

    render() {
        return (
            <Provider store={this.state.store}>
                <PersistGate
                    loading={<View />}
                    persistor={this.state.persistor}>
                    <AppNavigators />
                </PersistGate>
            </Provider>
        );
    }

}

AppRegistry.registerComponent(appName, () => App);
