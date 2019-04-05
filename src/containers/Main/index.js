import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button } from 'react-native';

export default class Main extends Component {

    static navigationOptions = {
        header: null
    }

    render() {
        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <Button title="Redirect to 'resto'" onPress={() => this.props.navigation.navigate("Web")} />
            </View>
        );
    }
}