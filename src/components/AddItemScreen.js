
import React, {Component} from 'react';
import { View, Button } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

export default class AddItemScreen extends React.Component {

    constructor(props) {
      super(props)
    }
  
      render() {
          return (
          <View style={{ flex: 1, margin: 5, backgroundColor: '#ddd', height: 130}}>
          <TextInput placeholder="id">ID</TextInput>

          <TextInput 
                    placeholderTextColor="gray"
                    placeholder="description">Description</TextInput>
                <Button 
                    title="Submit"
                    onPress={() => this.props.navigation.navigate('DashboardScreen')}
                    color="#841584"
                />
          </View>
          );
      }
  }