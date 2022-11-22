/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function ShowPresensi() {
  return (
    <View style={styles.container}>
        <View style={styles.row}>
            <Text>jndej</Text>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
        marginTop:5,
        marginLeft:10,
        marginRight:10,
    },
    row:{
        position:'relative',
        backgroundColor: 'white',
        padding: 20,
        marginBottom:20,
        borderRadius:10,
        flexDirection: 'row',
        flexWrap: 'wrap',
        flex:1,
    },
    label:{
        fontSize:16,
        fontWeight:'600',
        color:'#0087ff',
      },});
