/* eslint-disable no-alert */
/* eslint-disable no-undef */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View} from 'react-native';
import React,{ Component } from 'react';
import { Table ,Rows,Row} from 'react-native-table-component';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

// export default function ShowPresensi() {
export class ShowPresensi extends Component {
    constructor(props) {
        // console.log(bio);
        super(props);
        this.state = {
            empno:'',
            mm : '',
            yy : '',
            tableHead: ['Tanggal', 'Masuk', 'Pulang', 'Status'],
            tableData: [
            ],
        };
      }

    render() {
        const state = this.state;
        // console.log(this.state  );

        const presensi = (empno,mpick,ypick ) => {
            if (  ypick && mpick  ){
                // console.log(mpick,' ',this.state  );
                if (mpick < 10){
                    mpick = '0' + mpick;
                }
              axios
              .post('http://27.123.2.107:1000/Personalia/ControlKaryawan/presensi_m',JSON.stringify({
                empno: empno,
                bulan:mpick,
                tahun: ypick,
              }))
              .then(response => {
                let res = response.data;
                // consolers).length);
                const dataP = [];
                this.setState({
                    tableData:[],
                });
                for (let index = 0; index < Object.keys(res).length; index++) {
                    // const element = array[index];
                    dataP.push([res[index].dd + '/' + res[index].mm + '/' + res[index].yy,res[index].masuk,res[index].pulang,res[index].ket],
                    );
                }
                this.setState({
                  tableData:dataP,
                  empno:empno,
                  yy:ypick,
                  mm:mpick,
                });
              })
              .catch(function (error) {
                // handle error
                alert(error.message);
              });
            }
          };
          presensi(this.props.empno,this.props.mpick,this.props.ypick);
        return (
            <View style={styles.container}>
                <View style={styles.title}>
                    <Text style={styles.label}>Keterangan</Text>
                    <View style={styles.breakLine} />
                        <Table borderStyle={{ borderWidth: 2, borderColor: '#c8e1ff' }}>
                            <Row data={state.tableHead} flexArr={[2, 1, 1, 2]} style={styles.head} textStyle={styles.text} />
                            <Rows data={state.tableData} flexArr={[2, 1, 1, 2]}  textStyle={styles.text} />
                        </Table>
                </View>
            </View>
        );
      }
}

const styles = StyleSheet.create({
    container:{
        marginTop:10,
        marginLeft:10,
        marginRight:10,
        marginBottom:20,
    },
    // table: { flex: 1, backgroundColor: '#fff' },
    head: { height: 40, backgroundColor: '#f1f8ff' },
    wrapper: { flexDirection: 'row' },
    titletb: {
        flex: 1,
        backgroundColor: '#f6f8fa',
        color:'grey' },
    text: { textAlign: 'center' ,color:'grey',margin: 2 },
    title:{
        position:'relative',
        backgroundColor: 'white',
        padding: 20,
        borderRadius:10,
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
        paddingBottom:5,
    },
});
