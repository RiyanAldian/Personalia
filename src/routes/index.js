/* eslint-disable prettier/prettier */
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import * as React from 'react';
import { Login,Dashboard,Presensi } from '../pages';
import {BottomNavigator} from '../components';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { View, Text } from 'react-native';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();


function MyDrawer() {
  return (
    <Drawer.Navigator useLegacyImplementation
    screenOptions={{
      drawerStyle: {
        backgroundColor: '#fff',
        width: 240,
      },
      headerTintColor: 'white',
      headerStyle: {
        height: 50, // Specify the height of your custom header
        backgroundColor:'#0087ff',
        shadowColor:'#0087ff',
      },
    }}>
      <Drawer.Screen name="Dashboard" component={MainApp} options={{ drawerLabel: 'Home' }}/>
      <Drawer.Screen name="Article" component={Presensi} />
    </Drawer.Navigator>
  );
}

function MainApp() {
  return (
    <Tab.Navigator
    initialRouteName="Home"
    tabBar={props => <BottomNavigator {...props} />}
    screenOptions={{
      headerShown: false,
    }}>
    <Tab.Screen name="Home" component={Dashboard} />
    <Tab.Screen name="Presensi" component={Presensi} />
  </Tab.Navigator>
  );
}


const Routes = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator
        initialRouteName="Login"
        screenOption={{
            headerShown:false,
        }}>
        <Stack.Screen name="Login" component={Login}
         options={{ headerShown: false }}/>
        <Stack.Screen name="MainApp" component={MyDrawer}
          options={{ headerShown: false }} />
        </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
