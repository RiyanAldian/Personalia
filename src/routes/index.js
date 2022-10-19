/* eslint-disable prettier/prettier */
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import * as React from 'react';
import { Login,Dashboard,Presensi } from '../pages';
import {BottomNavigator} from '../components';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

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
        <Stack.Screen name="MainApp" component={MainApp}
          options={{ headerShown: false }} />
        </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
