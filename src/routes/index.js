/* eslint-disable prettier/prettier */
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import * as React from 'react';
import { Login,Dashboard,Presensi } from '../pages';
import {CustomSidebarMenu} from '../components';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Stack = createNativeStackNavigator();
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
          backgroundColor:'#0087ff',
          shadowColor:'#0087ff',
        },
      }}
      drawerContent={(props) => <CustomSidebarMenu {...props} />}>
      <Drawer.Screen name="Dashboard" component={MainApp} options={{ drawerLabel: 'Home' }}/>
      <Drawer.Screen name="Presensi" component={Presensi}  />
    </Drawer.Navigator>
  );
}

function MainApp() {
  return (
  <Dashboard/>
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
         options={{ headerShown: false }}
         />
        <Stack.Screen name="MainApp" component={MyDrawer}
          options={{ headerShown: false }} />
        </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
