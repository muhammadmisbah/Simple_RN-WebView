import React, { Component } from 'react';
import { Platform, KeyboardAvoidingView } from 'react-native';
import RootStack from "./src"

export default class App extends Component {
  render() {
    return (
      Platform.OS === "ios" ?
        <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
          <RootStack />
        </KeyboardAvoidingView>
        :
        <RootStack />
    );
  }
}