
import React, {Component} from 'react';
import { View, Text, TextInput, Button } from 'react-native';

import Actions from 'react-native-router-flux';

export default class Login extends React.Component {

    onpresslogin() {
        Actions.dashboard();
    }
    
    render() {
        return (
            <View>
            <Text> Login to portal -- </Text>
            <TextInput></TextInput>
            <Button 
            title="Login"
            onpress={this.onpresslogin}></Button>
            </View>
        );
    }
}