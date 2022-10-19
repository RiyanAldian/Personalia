/* eslint-disable prettier/prettier */
import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    TextInput,
    TouchableOpacity,
    Image,
    Alert,
  } from 'react-native';
import React, {useState, Component, useEffect}  from 'react';
import Images from '../../assets';


const Login = ({navigation}) => {
    const login = () => {
        navigation.replace('MainApp');
      };
  return (
    <SafeAreaView style={styles.page}>
      <View style={styles.container}>
        <Image source={Images.logo} style={styles.Image} />
        <Text style={styles.title}>Profil Karyawan</Text>
        <TextInput
          placeholder="Nomor Induk Karyawan"
          style={styles.emailInput}
        />
        <TextInput
          placeholder="Password"
          secureTextEntry
          style={styles.passwordInput}
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
      backgroundColor: '#9be0fb',
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
      color: '#17aa7a',
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
      borderWidth: 1,
      marginBottom: 16,
      borderColor: '#17aa7a',
    },
    passwordInput: {
      backgroundColor: '#717976',
      height: 45,
      borderRadius: 8,
      paddingHorizontal: 16,
      paddingVertical: 13,
      borderWidth: 1,
      borderColor: '#17aa7a',
    },
    breakLine: {
      backgroundColor: '#F2F2F2',
      marginVertical: 40,
      marginHorizontal: 16,
      height: 1,
    },
    button: {
      backgroundColor: '#17aa7a',
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
