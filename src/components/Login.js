
import React, {Component} from 'react';
import { StyleSheet, View, Text, TextInput, Button } from 'react-native';

import { useNavigation } from '@react-navigation/native';

class Login extends React.Component {

    constructor(props) {
        super(props)
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
                    onPress={() => this.props.navigation.navigate('DashboardScreen')}
                    color="#841584"
                />
            </View>
        );
    }
}

Login.navigationOptions = {
    title: 'Login',
    gesturesEnabled: false,
  };

const styles = StyleSheet.create({
   container: {
       flex: 1,
       backgroundColor: '#fff',
       alignItems: 'center'
   } 
});

export default Login;