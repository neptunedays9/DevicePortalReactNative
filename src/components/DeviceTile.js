import React, {Component} from 'react';
import {Button} from 'react-native';

export default class DeviceTile extends React.Component {

    
    constructor(props) {
        super(props)
        console.log(props)
    }
    

    render() {
        return(
            <Button title={this.props.title}/>
        );
    }
}