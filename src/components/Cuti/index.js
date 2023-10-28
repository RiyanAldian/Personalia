/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import { StyleSheet,
    Text,
    View,
    Image,
    Modal,
    Alert,
    Pressable} from 'react-native';
import React, { Component } from 'react';
import Images from '../../assets';
import { Table ,TableWrapper,Col,Rows} from 'react-native-table-component';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';


export class Cuti extends Component {
    constructor() {
      super();
      this.state = {
        email: '',
        tableData: [
        ],
      };
      AsyncStorage.getItem('user', (error, result) => {
        if (result) {
            let resultParsed = JSON.parse(result);
            // console.log(resultParsed);
            this.setState({
                email: resultParsed.email,
            });
        }
    });
    }
    state = {
      modalVisible: false,
    };
    setModalVisible = (visible) => {
      this.setState({ modalVisible: visible });
    }
    render() {
      const { modalVisible } = this.state;
      const state = this.state;
      const cuti = () => {
        // console.log(state);
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
              tableData: [
              ['Masa Kerja', res.Masa_Kerja + ' Bulan'],
              ['Jumlah Cuti', res.jmlCuti + ' Hari'],
              ['Jumlah Pakai Cuti', res.jmlpakai +  ' Hari'],
              ['Jumlah Cuti Diuangkan'],
              ['Sisa Cuti', res.jmlCuti - res.jmlpakai + ' Hari']
            ],
            });
          })
          .catch(function (error) {
            // handle error
            alert(error.message);
          });
        }
      };
      cuti();
      // console.log(state)
    return (
      <View style={styles.container}>
        {/* <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            this.setModalVisible(!modalVisible);
          }}
        > */}
          {/* <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Hello World!</Text>
              <Pressable
                style={[styles.button1, styles.buttonClose]}
                onPress={() => this.setModalVisible(!modalVisible)}
              >
                 <Image source={Images.ICClose}/>
              </Pressable>
            </View>
          </View> */}
        {/* </Modal> */}
          <View style={styles.title}>
            <Text style={styles.label}>Cuti</Text>
            <View style={styles.breakLine} />
                <View style={styles.table}>
                  <Table borderStyle={{borderWidth: 0}}>
                    <TableWrapper style={styles.wrapper}>
                        <Col data={state.tableTitle} style={styles.title} textStyle={styles.text}/>
                        <Rows data={state.tableData} flexArr={[2, 1]} style={styles.row} textStyle={styles.text}/>
                    </TableWrapper>
                  </Table>
                </View>
                <View>
                  <Pressable
                    style={[styles.button, styles.buttonOpen]}
                    onPress={() => this.setModalVisible(true)}
                    >
                    <Text style={styles.textStyle}>Detail</Text>
                  </Pressable>
              </View>
          </View>
      </View>

    );
    }
}


export default Cuti;

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
      centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
      },
      modalView: {
        margin: 10,
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
      },
      button: {
        borderRadius: 20,
        padding: 10,
        marginTop:10,
      },
      button1: {
        borderRadius: 20,
        padding: 5,
      },
      buttonOpen: {
        backgroundColor: '#2196F3',
      },
      buttonClose: {
        backgroundColor: 'white',
        position:'absolute',
        alignSelf:'flex-end',
        padding:0,
      },
      textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
      },
      modalText: {
        marginBottom: 15,
        color:'grey',
        textAlign: 'center',
      },
      modalTitle:{
        position:'absolute',
        alignSelf:'flex-start',
        padding:12,
        color:'grey',
      },
      breakLine: {
        backgroundColor: '#F2F2F2',
        marginVertical: 8,
        height: 1,
      },
});
