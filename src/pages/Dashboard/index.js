/* eslint-disable prettier/prettier */
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Image,
  Modal,
  Alert,
  ScrollView,
  Pressable,
  Button,
} from 'react-native';
import React, { useState } from 'react';
import { Label } from 'react-native-form-component';
import Images from '../../assets';
import component, { Biodata, Cuti } from '../../components';
import Today from '../../components/Today';

const Dashboard = () => {
  const name = 'Riyan Aldiansyah';
  const nik = '2022020001';

  return (
    // <SafeAreaView style={styles.page}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.blue}>
          {/* <TouchableOpacity>
            <Image source={Images.ICMenu} style={styles.menu}/>
          </TouchableOpacity>
          <Text style={styles.userName}>Hi, {name} </Text> */}
        </View>
       
        <View style={styles.container}>
          <View style={styles.title}>
            <Text style={styles.label}>User</Text>
            <Text style={styles.sublabel}>{name}</Text>
            <Text style={styles.sublabel}>{nik}</Text>
          </View>
        </View>
        <Biodata/>
        <Cuti/>
        <Today/>
      </ScrollView>
  // </SafeAreaView>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  page:{
    color:'#f3efed',
    paddingBottom:0,
  },
  blue:{
    backgroundColor:'#0087ff',
    height:20,
    position:'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  container:{
    marginTop:10,
    marginLeft:10,
    marginRight:10,
  },
  title:{
    position:'relative',
    backgroundColor: 'white',
    padding: 20,
    top:40,
    borderRadius:10,
  },
  userName:{
    alignSelf:'flex-end',
    fontSize:14,
    padding:20,
    color:'white',
  },
  sublabel:{
    color:'grey',

  },
  label:{
    fontSize:16,
    fontWeight:'600',
    color:'#0087ff',
  },
  ket:{
    color:'grey',
    paddingRight:2,
  },
  txt:{
    color:'grey',
    paddingLeft:2,
    alignSelf:'flex-end',
  },
  detail:{
    flexDirection:'row',
    flexWrap:'wrap',
  },
  btn:{
    paddingTop:10,
  },
  menu:{
    position:'absolute',
    margin:16,
  },
});
