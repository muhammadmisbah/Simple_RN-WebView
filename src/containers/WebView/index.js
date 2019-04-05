import React, { Component } from 'react';
import { Platform, KeyboardAvoidingView } from 'react-native';
import { WebView } from 'react-native-webview';

export default class Web extends Component {

    static navigationOptions = Platform.OS === "ios" ? {} : {
        header: null
    }

    render() {
        return (
            Platform.OS === "ios" ?
                <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
                    <WebView
                        style={{ flex: 1 }}
                        originWhitelist={['*']}
                        source={{ uri: 'https://resto1.code509.com/' }}
                    />
                </KeyboardAvoidingView>
                :
                <WebView
                    style={{ flex: 1 }}
                    scalesPageToFit={false}
                    originWhitelist={['*']}
                    source={{ uri: 'https://resto1.code509.com/' }}
                />
        );
    }
}