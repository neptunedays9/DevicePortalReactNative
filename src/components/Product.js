import React, {Component} from 'react';
import {Text, StyleSheet} from 'react-native';

import {Card, Button, Image} from 'react-native-elements';

import images from '../images/index.js';

export default class Product extends React.Component {

    
    constructor(props) {
        super(props)
        console.log(props)
    }
    

    render() {
        return(
            <Card>
                <Image source={images.iphone} style= {{height: 350, width: null, flex: 1}}/>
                <Text style={{marginBottom: 10, marginTop: 20 }} h2>
                    iPhone 7
                </Text>
                <Text style={styles.price} h4>
                    $ 200
                </Text>
                <Text h6 style={styles.description}>
                    added 2h ago
                </Text>
                <Button
                    type="clear"
                    title='Buy now'
                    onPress={() => this.props.navigation.navigate('Details')} />
            </Card>
        );
    }
}

const styles = StyleSheet.create({
    name: {
        color: '#5a647d',
        fontWeight: 'bold',
        fontSize: 30
    },
    price: {
        fontWeight: 'bold',
        marginBottom: 10
    },
    description: {
        fontSize: 10,
        color: '#c1c4cd'
    }
});