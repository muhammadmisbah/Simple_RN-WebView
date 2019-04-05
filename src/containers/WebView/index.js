import React, { Component } from 'react';
import { Platform, KeyboardAvoidingView } from 'react-native';
import { WebView } from 'react-native-webview';

const JS = `const meta = document.createElement('meta'); meta.setAttribute('content', 'width=device-width, initial-scale=0.5, maximum-scale=0.5, user-scalable=0'); meta.setAttribute('name', 'viewport'); document.getElementsByTagName('head')[0].appendChild(meta);`

export default class Web extends Component {

    static navigationOptions = Platform.OS === "ios" ? {} : {
        header: null
    }

    render() {
        return (
            <WebView
                style={{ flex: 1 }}
                originWhitelist={['*']}
                source={{ uri: 'https://resto1.code509.com/' }}
            />
        );
    }
}