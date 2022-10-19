/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View,ScrollView,SafeAreaView} from 'react-native';
import React from 'react';

const Presensi = () => {
  return (
    <SafeAreaView style={styles.page}>
    <ScrollView style={styles.scrollView}>
    <View style={styles.blue} />
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.label} />
      </View>
    </View>
    </ScrollView>
</SafeAreaView>
  );
};

export default Presensi;

const styles = StyleSheet.create({
  page:{
    color:'#f3efed',
    paddingBottom:10,
  },
  blue:{
    backgroundColor:'#0087ff',
    height:60,
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
});
