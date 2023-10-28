/* eslint-disable prettier/prettier */
import {Text, View,StyleSheet} from 'react-native';
import React, {useState,useEffect} from 'react';
import axios from 'axios';
import {useDispatch} from 'react-redux';
import {storeData, getData} from '../../localStorage';
const Today = () =>  {
  const [email, setEmail] = useState('');
  const [masuk, setMasuk] = useState('');
  const [pulang, setPulang] = useState('');

  const dispatch = useDispatch();
  useEffect(() => {
    getData('user').then(res => {
      if (res !== null) {
        dispatch({
          type: 'SET_LOGIN',
          value: res,
        });
        setEmail(res.email);
        // console.log(res);
      }
    });
  }, [dispatch]);

  const today = () => {
    if (email !== ''){
      axios
      .post('http://27.123.2.107:1000/Personalia/ControlKaryawan/hari_ini',JSON.stringify({
        email: email,
      }))
      .then(response => {
        let res = response.data;
        setMasuk(res.masuk);
        setPulang(res.pulang);
        storeData('masuk',res.masuk);
        storeData('pulang',res.pulang);

            // console.log(res.masuk);
      })
      .catch(function (error) {
        // handle error
        alert(error.message);
      });
  }};
  today();
  const jam = {
    'masuk':masuk,
    'pulang':pulang,
  };


    return (
        <View style={styles.container}>
        <View style={styles.title}>
          <Text style={styles.label}>Hari ini</Text>
        <View style={styles.breakLine} />
          <View style={styles.detail}>
            <View style={styles.ket}>
              <Text style={styles.ket}>Masuk</Text>
              <Text style={styles.ket}>{jam.masuk}</Text>
            </View>
            <View style={styles.ket}>
            <Text style={styles.ket}>Pulang</Text>
              <Text style={styles.ket}>{jam.pulang}</Text>
            </View>
          </View>
        </View>
      </View>
    );
}

export default Today;

const styles = StyleSheet.create({
    container:{
        marginTop:5,
        marginLeft:10,
        marginRight:10,
        marginBottom:0,
        paddingBottom:30,
    },
    title:{
        position:'relative',
        backgroundColor: 'white',
        padding: 20,
        top:20,
        borderRadius:10,
    },
    label:{
        fontSize:16,
        fontWeight:'600',
        color:'#0087ff',
    },
    ket:{
        color:'grey',
        paddingRight:30,
    },
    breakLine: {
      backgroundColor: '#F2F2F2',
      marginVertical: 8,
      height: 1,
    },
    detail:{
      flex:1,
      flexDirection:'row',
      alignSelf:'flex-start',
      justifyContent:'space-around',
    },
});
