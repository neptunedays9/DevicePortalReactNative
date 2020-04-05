
import React, {Component} from 'react';
import { StyleSheet, View, Text, TextInput, Button } from 'react-native';

import Actions from 'react-native-router-flux';

export default class Login extends React.Component {

    onpresslogin() {
        Actions.dashboard();
    }
    
    render() {
        return (
            <View>
                <Text> Login to portal -- </Text>
                <TextInput>UserName</TextInput>
                <TextInput 
                    placeholderTextColor="gray"
                    placeholder="password">Password</TextInput>
                <Button 
                    title="Login"
                    onpress={this.onpresslogin}
                    color="#841584"
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
   container: {
       flex: 1,
       backgroundColor: '#fff',
       alignItems: 'center'
   } 
});