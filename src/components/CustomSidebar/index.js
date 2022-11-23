/* eslint-disable prettier/prettier */
// Custom Navigation Drawer / Sidebar with Image and Icon in Menu Options
// https://aboutreact.com/custom-navigation-drawer-sidebar-with-image-and-icon-in-menu-options/

import React from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Image,
  Text,
  Linking,
} from 'react-native';

import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import Images from '../../assets';

const CustomSidebarMenu = props => {
  // const login = () => {
  //   var {dispatch, navigate} = this.props.navigation;
  //   const reset = NavigationActions.reset({
  //   index:0,
  //   key:null,
  //   actions:[
  //   NavigationActions.navigate({
  //   routeName:'SignedOut'
  //   })
  //   ]
  //   });
  //   dispatch(reset);
  //   }
  // };
  
  return (
    <SafeAreaView style={{flex: 1}}>
      {/*Top Large Image */}
      <Image
        source={Images.Logo}
        style={styles.sideMenuProfileIcon}
      />
      <Text style={{color:'black',textAlign:'center',fontWeight:'600'}}>KGI PROFILE KARYAWAN</Text>
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        <DrawerItem
          label="Logout" onPress={() => props.navigation.navigate("Login")}
        />
        <View style={styles.customItem}>
          <Text
            onPress={() => {
              Linking.openURL('https://aboutreact.com/');
            }}>
            Rate Us
          </Text>
          <Image
            style={styles.iconStyle}
          />
        </View>
      </DrawerContentScrollView>
      <Text style={{fontSize: 14, textAlign: 'center', color: 'grey',paddingBottom:6}}>
        PT. Kanaan Global Indonesia
      </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sideMenuProfileIcon: {
    resizeMode: 'center',
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginTop:30,
  },
  iconStyle: {
    width: 15,
    height: 15,
    marginHorizontal: 5,
  },
  customItem: {
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default CustomSidebarMenu;
