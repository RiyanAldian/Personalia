/* eslint-disable prettier/prettier */
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  StatusBar,
} from 'react-native';
import React,{useState} from 'react';
import {  DatePresensi} from '../../components/DatePresensi';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import axios from 'axios';

const Presensi = () => {
  const [name, setName] = useState('');
  const Profile = {
    'nama' : name,
  };
  const readData = async () => {
    try {
      const value = await AsyncStorage.getItem('names');
      if (value !== null) {
        let resultParsed = JSON.parse(value);
        // console.log(resultParsed);
        setName(resultParsed);
        // setInput(value);
      }
    } catch (e) {
      // eslint-disable-next-line no-alert
      alert('Failed to fetch the input from storage');
    }
  };
  readData();
  return (
    <SafeAreaView style={styles.page}>
      <StatusBar
        barStyle = "dark-content"  //bisa juga dark-content, light-content and default
        hidden = {false} //To hide statusBar
        backgroundColor = "#0087ff" //Background color of statusBar
        translucent = {false} //allowing light, but not detailed shapes
        networkActivityIndicatorVisible = {true}
        />
    <ScrollView style={styles.scrollView}>
      <View style={styles.blue}>
        <Text style={styles.userName}>Hi, {Profile.nama} </Text>
      </View>
      <View style={styles.circ}/>
      <View style={styles.container1}>
        <View style={styles.title}>
          <Text style={styles.label}>Presensi Bulanan</Text>
        </View>
      </View>
        <DatePresensi/>
      {/* <ShowPresensi/> */}
    </ScrollView>
</SafeAreaView>
  );
};

export default Presensi;

const styles = StyleSheet.create({
  page:{
    color:'#f3efed',
  },
  circ:{
    backgroundColor:'#f3efed',
    width:'170%',
    position:'absolute',
    alignSelf:'center',
    height:500,
    top:40,
    borderRadius:250,
  },
  blue:{
    backgroundColor:'#0087ff',
    height:100,
    position:'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  container:{
    marginTop:5,
    marginLeft:10,
    marginRight:10,
  },
  container1:{
    marginLeft:10,
    marginRight:10,
    marginTop:0,
    marginBottom:20,
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
    padding:10,
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
