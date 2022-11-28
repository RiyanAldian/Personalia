/* eslint-disable prettier/prettier */
import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    TextInput,
    TouchableOpacity,
    Image,
    StatusBar,
  } from 'react-native';
import React, {useState, useEffect}  from 'react';
import axios from 'axios';
import {useDispatch} from 'react-redux';
import Images from '../../assets';
import {storeData, getData} from '../../localStorage';

const Login = ({navigation}) => {
  const [email,setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const login = () => {
    axios
      .post('http://192.168.20.43:1000/Personalia/ControlKaryawan/users',JSON.stringify({
        email: email,
        password: password,
      }))
      .then(response => {
        let res = response.data;
        dispatch({
          type: 'SET_LOGIN',
          value: {email: res.email, password: res.password},
        });
        storeData('user', {email: res.email, password: res.password});
        // navigation.replace('MainApp');
        if (res.status === true){
          navigation.replace('MainApp');
        } else {
          // console.log(res);
          alert('Gagal Login');
        }
      })
      .catch(function (error) {
        // handle error
        alert(error.message);
      });
  };

  useEffect(() => {
    getData('user').then(res => {
      if (res !== null) {
        dispatch({
          type: 'SET_LOGIN',
          value: res,
        });
        navigation.replace('MainApp');

      }
    });
  }, [dispatch, navigation]);

  return (
    <SafeAreaView style={styles.page}>
        <StatusBar
        barStyle = "dark-content"  //bisa juga dark-content, light-content and default
        hidden = {false} //To hide statusBar
        backgroundColor = "#f3efed" //Background color of statusBar
        translucent = {false} //allowing light, but not detailed shapes
        networkActivityIndicatorVisible = {true}
        />
      <View style={styles.circ}/>
      <View style={styles.rec}/>
      <View style={styles.container}>
        <Image source={Images.Logo} style={styles.Image} />
        <Text style={styles.title}>Profil Karyawan</Text>
        <TextInput
          placeholder="Nomor Induk Karyawan"
          style={styles.emailInput}
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          placeholder="Password"
          secureTextEntry
          style={styles.passwordInput}
          onChangeText={setPassword}
          value={password}
        />
        <View style={styles.breakLine} />
        <TouchableOpacity style={styles.button} onPress={login} >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Login;


const styles = StyleSheet.create({
    page: {
      flex: 1,
      backgroundColor: '#f3efed',
    },
    container: {
      flex: 1,
      paddingHorizontal: 16,
      justifyContent: 'center',
    },
    Image: {
      alignSelf: 'center',
      width:150,
      height:150,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#0087ff',
      alignSelf: 'center',
      marginBottom: 77,
      marginTop: 16,
    },
    emailInput: {
      backgroundColor: '#717976',
      height: 45,
      borderRadius: 8,
      paddingHorizontal: 16,
      paddingVertical: 13,
      marginBottom: 16,
      borderWidth: 1,
      borderColor: '#717976',
    },
    passwordInput: {
      backgroundColor: '#717976',
      height: 45,
      borderRadius: 8,
      paddingHorizontal: 16,
      paddingVertical: 13,
      borderWidth: 1,
      borderColor: '#717976',
    },
    circ:{
      backgroundColor:'#c8e1ff',
      width:'200%',
      position:'absolute',
      alignSelf:'center',
      height:900,
      top:50,
      borderRadius:800,
    },
    rec:{
      backgroundColor:'#c8e1ff',
      width:'140%',
      position:'absolute',
      alignSelf:'center',
      height:500,
      bottom:0
    },
    breakLine: {
      backgroundColor: '#F2F2F2',
      marginVertical: 40,
      marginHorizontal: 16,
      height: 1,
    },
    button: {
      backgroundColor: '#0087ff',
      height: 45,
      borderRadius: 8,
      justifyContent: 'center',
      alignItems: 'center',
    },
    buttonText: {
      fontSize: 16,
      color: '#fff',
      fontWeight: 'bold',
    },
});
