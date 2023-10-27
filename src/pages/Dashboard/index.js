/* eslint-disable prettier/prettier */
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  StatusBar,
} from 'react-native';
import React, {useState,useEffect} from 'react';
import { Biodata, Cuti } from '../../components';
// import Today from '../../components/Today';
import axios from 'axios';
import {useDispatch} from 'react-redux';
import {storeData, getData} from '../../localStorage';

const Dashboard = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [masuk, setMasuk] = useState('');
  // const [[pulang], setPulang] = useState('');

  const dispatch = useDispatch();
  useEffect(() => {
    getData('user').then(res => {
      if (res !== null) {
        dispatch({
          type: 'SET_LOGIN',
          value: res,
        });
        setEmail(res.email);
      }
    });
  }, [dispatch]);

  const bio = () => {
    if (email !== ''){
      axios
      .post('http://27.123.2.107:1000/Personalia/ControlKaryawan/dataKaryawan',JSON.stringify({
        email: email,
      }))
      .then(response => {
        // console.log(response);

        let res = response.data;
        setName(res.names);
        storeData('names',res.names);
      })
      .catch(function (error) {
        // handle error
        alert(error.message);
      });
      axios
      .post('http://27.123.2.107:1000/Personalia/ControlKaryawan/hari_ini',JSON.stringify({
        email: email,
      }))
      .then(response => {
        // console.log(response.data);

        let res = response.data;
        setMasuk(res.masuk);
        storeData('masuk',res.masuk);
      })
      .catch(function (error) {
        // handle error
        alert(error.message);
      });
  }};
  bio();
  useEffect(() => {
    getData('names').then(res => {
      if (res !== null) {
        dispatch({
          type: 'SET_LOGIN',
          value: res,
        });
        setName(res);
      }
    });
  }, [dispatch]);
  const Profile = {
    'nama' : name,
    'nik' : email,
    'masuk':masuk};

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
            <Text style={styles.label}>Profile Karyawan</Text>
          </View>
        </View>
        <View style={styles.container}>
          <View style={styles.title}>
            <Text style={styles.label}>User</Text>
            <Text style={styles.sublabel}>{Profile.nama}</Text>
            <Text style={styles.sublabel}>{Profile.nik}</Text>
          </View>
        </View>
        <Biodata/>
        <Cuti/>
        <View style={styles.containerDay}>
        <View style={styles.title}>
          <Text style={styles.label}>Hari ini</Text>
        <View style={styles.breakLine} />
          <View style={styles.detail}>
            <View style={styles.ket}>
              <Text style={styles.ket}>Masuk</Text>
              <Text style={styles.ket}>{Profile.masuk}</Text>
            </View>
            <View style={styles.ket}>
              <Text style={styles.ket}>Pulang</Text>
              <Text style={styles.ket}>{Profile.masuk}</Text>
            </View>
          </View>
        </View>
      </View>
      </ScrollView>
  </SafeAreaView>
  );
};

export default Dashboard;

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
  containerDay:{
    marginBottom: 50 ,
    marginLeft:10,
    marginRight:10,
    marginTop:0,
  }});
