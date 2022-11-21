/* eslint-disable prettier/prettier */
import {Text, View,StyleSheet} from 'react-native';
import React, {Component} from 'react';

export class Today extends Component {
  render() {
    return (
        <View style={styles.container}>
        <View style={styles.title}>
          <Text style={styles.label}>Hari ini</Text>
        <View style={styles.breakLine} />

          <View style={styles.detail}>
            <View style={styles.ket}>
              <Text style={styles.ket}>Masuk</Text>
              <Text style={styles.ket}>06:19</Text>
            </View>
            <View style={styles.ket}>
              <Text style={styles.ket}>Pulang</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

export default Today;

const styles = StyleSheet.create({
    container:{
        marginTop:5,
        marginLeft:10,
        marginRight:10,
        marginBottom:10,
        paddingBottom:20,
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
        paddingRight:2,
    }, 
    breakLine: {
      backgroundColor: '#F2F2F2',
      marginVertical: 8,
      height: 1,
    },
});