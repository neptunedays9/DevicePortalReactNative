
import * as React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

import Product from './Product'

const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
  ];
  
export default class Dashboard extends React.Component {


    render() {
        return (
        <View style={{ flex: 1, margin: 5, backgroundColor: '#ddd', height: 130}}>
             <FlatList
                data={DATA}
                renderItem={({ item }) => <Product {...item} />}
                keyExtractor={item => item.id}
                numColumns={1}
            />
        </View>
        );
    }
}
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      //marginTop: Constants.statusBarHeight,
    },
    item: {
      backgroundColor: '#f9c2ff',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 32,
    },
  })
  