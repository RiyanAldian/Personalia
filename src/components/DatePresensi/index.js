/* eslint-disable prettier/prettier */
/* eslint-disable no-alert */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import {Text, StyleSheet, View,Pressable,Button} from 'react-native';
import React, {Component,useState } from 'react';
import SelectDropdown from 'react-native-select-dropdown';
import { ShowPresensi } from '../ShowPresensi';
import { State } from 'react-native-gesture-handler';


export default class DatePresensi extends Component {
    constructor(props) {
        super(props);
        this.state = {
            shouldShow: true,
            setShouldShow: true,
            status: false,
            mpick : 0,
            ypick : 0,
        };
      }
      toggleStatus(){
        if (this.state.ypick === 0 || this.state.mpick === 0){
            alert('Pilih Bulan dan tahun terlebih dahulu');
        } else {
            this.setState({
                status:!this.state.status,
            });
        }
        console.log('toggle button handler: ' + this.state.status );
        console.log('Bulan: ' + this.state.mpick );
        console.log('Tahun: ' + this.state.ypick );

    }

    render() {
        const month = [];
        for (let i = 1; i <= 12; i++){
            month.push(i);
        }
        const year = [];
        const tahun = new Date().getFullYear();
        for (let i = 2017; i <= tahun; i++){
            year.push(i);
        }
        console.log(this.state.status);
        return (
            <View>
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
                                    this.state.mpick = selectedItem;
                                    console.log(this.state.mpick);
                                }}
                                dropdownStyle={{
                                    borderRadius:100 / 5,
                                    backgroundColor:'#fff',
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
                                    this.state.ypick = selectedItem;
                                    console.log(this.state.ypick,index);
                                    return this.state.ypick;
                                }}
                                dropdownStyle={{
                                    borderRadius:100 / 5,
                                    backgroundColor:'#fff',
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
                    {/* <Pressable
                        style={[styles.button]}
                        onPress={this._onPressButton}>
                        <Text style={styles.textStyle}>Detail</Text>
                        </Pressable> */}
                        <Button
                            title="Detail"
                            style={styles.button}
                            onPress={()=>this.toggleStatus()}
                            />
                    </View>
                    </View>
                </View>
                <View>{this.state.status ? ( <ShowPresensi/>) : false}</View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        marginTop:5,
        marginLeft:10,
        marginRight:10,
        marginBottom:20,
    },
    row:{
        position:'relative',
        backgroundColor: 'white',
        padding: 20,
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
        padding:1,
    },
});
