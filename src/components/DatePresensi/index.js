/* eslint-disable prettier/prettier */
import {Text, StyleSheet, View} from 'react-native';
import React, {Component} from 'react';

export default class DatePresensi extends Component {
  render() {
    return (
        <View style={styles.container}>
        <View style={styles.title}>
          <Text style={styles.label}>TGL</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({  
    container:{
        marginTop:5,
        marginLeft:10,
        marginRight:10,
    },
    title:{
        position:'relative',
        backgroundColor: 'white',
        padding: 20,
        marginBottom:20,
        top:20,
        borderRadius:10,
    },
    label:{
        fontSize:16,
        fontWeight:'600',
        color:'#0087ff',
      },
});
