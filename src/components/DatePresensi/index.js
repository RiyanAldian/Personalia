/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import {Text, StyleSheet, View,Pressable} from 'react-native';
import React, {Component} from 'react';
import SelectDropdown from 'react-native-select-dropdown';

export default class DatePresensi extends Component {
  render() {
    const month = [];
    for (let i = 1; i <= 12; i++){
        month.push(i);
    }
    const year = ['2017', '2018', '2019', '2020'];
    // console.log(month);

    return (
        <View style={styles.container}>
        <View style={styles.row}>
            <View style={{flex:3,flexDirection:'row',justifyContent:'space-between'}}>
                <SelectDropdown
                        buttonStyle={{
                            width:100,
                            borderRadius:100 / 2,
                            height:100 / 3,
                            backgroundColor:'#aebab8',
                        }}
                        defaultButtonText="Bulan"
                        buttonTextStyle={{
                            color:'#fff',
                        }}
                        data={month}
                        onSelect={(selectedItem, index) => {
                            console.log(selectedItem, index);
                        }}
                        buttonTextAfterSelection={(selectedItem, index) => {
                            // text represented after item is selected
                            // if data array is an array of objects then return selectedItem.property to render after item is selected
                            return selectedItem;
                        }}
                        rowTextForSelection={(item, index) => {
                            // text represented for each item in dropdown
                            // if data array is an array of objects then return item.property to represent item in dropdown
                            return item;
                        }}
                    />
            </View>
          {/* <Text style={styles.label}>TGL</Text> */}
          <View style={{flex:3,flexDirection:'row',justifyContent:'space-between',paddingLeft:10}}>
            <SelectDropdown
                    buttonStyle={{
                        width:100,
                        borderRadius:100 / 2,
                        height:100 / 3,
                        backgroundColor:'#aebab8',
                    }}
                    defaultButtonText="Tahun"
                    buttonTextStyle={{
                        color:'#fff',
                    }}
                    data={year}
                    onSelect={(selectedItem, index) => {
                        console.log(selectedItem, index);
                    }}
                    buttonTextAfterSelection={(selectedItem, index) => {
                        // text represented after item is selected
                        // if data array is an array of objects then return selectedItem.property to render after item is selected
                        return selectedItem;
                    }}
                    rowTextForSelection={(item, index) => {
                        // text represented for each item in dropdown
                        // if data array is an array of objects then return item.property to represent item in dropdown
                        return item;
                    }}
                />
          </View>
          <View style={{flex:3,flexDirection:'row',justifyContent:'space-between',paddingLeft:10}}>
          <Pressable
            style={[styles.button]}
                    >
            <Text style={styles.textStyle}>Detail</Text>
            </Pressable>
          </View>
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
    row:{
        position:'relative',
        backgroundColor: 'white',
        padding: 20,
        marginBottom:20,
        top:20,
        borderRadius:10,
        flexDirection: 'row',
        flexWrap: 'wrap',
        flex:1,
    },
    label:{
        fontSize:16,
        fontWeight:'600',
        color:'#0087ff',
      },
    button:{
        backgroundColor: '#2196F3',
        borderRadius: 20,
        width:70,
        padding: 5,
    },
    textStyle:{
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
});
