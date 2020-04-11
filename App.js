
import * as React from 'react';
import { Button, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Dashboard from './src/components/Dashboard'
import Login from './src/components/Login';
import AddItemScreen from './src/components/AddItemScreen';

const Stack = createStackNavigator();

function AppStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} 
      />
      <Stack.Screen 
        name="DashboardScreen" 
        component={Dashboard} 
        options={({ navigation, route }) => ({ 
          headerTitle: "Dashboard",
          headerRight: () => (
            <Button
              title="Add"
              color="#23f"
              onPress={() => navigation.navigate('AddItem')}
            />
          ), 
        })} 
      />
      <Stack.Screen name="AddItem" component={AddItemScreen} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <AppStack />
    </NavigationContainer>
  );
}
