/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
/* eslint-disable no-alert */
/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View} from 'react-native';
import React,{ Component } from 'react';
import { Table ,TableWrapper,Rows} from 'react-native-table-component';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

export class Biodata extends Component {
  constructor() {
      super();
      this.state = {
        email: '',
        tableData:[],
      };
      AsyncStorage.getItem('user', (error, result) => {
          if (result) {
              let resultParsed = JSON.parse(result);
              this.setState({
                  email: resultParsed.email,
              });
          }
      });
  }

  render() {
    const state = this.state;
    const bio = () => {
      if (state.email !== ''){
        axios
        .post('http://27.123.2.107:1000/Personalia/ControlKaryawan/dataKaryawan',JSON.stringify({
          email: state.email,
        }))
        .then(response => {
          let res = response.data;
          if (res.bagian === 'FO'){
            res.bagian = 'Office';
          } else {
            res.bagian = 'Produksi';
          }
          this.setState({
            tableData: [['KTP', res.ktp],
            ['BPJS', res.bpjs],
            ['JHT', res.idno],
            ['Alamat', res.alamat],
            ['Tanggal Masuk', res.tgl_masuk],
            ['Bagian', res.bagian],
            ['Status', res.jobtitle],
            ['Dept', res.sname]],
          });
        })
        .catch(function (error) {
          // handle error
          alert(error.message);
        });
      }

    };
    bio();

    return (
        <View style={styles.container}>
            <View style={styles.title}>
            <Text style={styles.label}>Biodata</Text>
            <View style={styles.breakLine} />
                <View style={styles.table}>
                <Table borderStyle={{borderWidth: 0}}>
                <TableWrapper style={styles.wrapper}>
                    {/* <Col data={state.tableTitle} style={styles.title} textStyle={{...(cellTextStyle ? cellTextStyle() : {}), ...textStyle}}/> */}
                    <Rows data={state.tableData} flexArr={[1, 2]}  textStyle={styles.text}/>
                </TableWrapper>
                </Table>
                </View>
            </View>
        </View>

    );
  }
}

export default Biodata;

const styles = StyleSheet.create({
      table: { flex: 1, backgroundColor: '#fff' },
      head: {  height: 40,  backgroundColor: '#f1f8ff'  },
      wrapper: { flexDirection: 'row' },
      titletb: { flex: 1, backgroundColor: '#f6f8fa' },
    //   row: {  height: 36  },
      text: { textAlign: 'left' ,color:'grey'},
      container:{
        marginTop:5,
        marginLeft:10,
        marginRight:10,
        paddingTop:20,
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
      breakLine: {
        backgroundColor: '#F2F2F2',
        marginVertical: 8,
        height: 1,
      },
});
