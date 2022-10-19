/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Image,
  Modal,
  Alert,
  ScrollView,
  Pressable,
  Button,
} from 'react-native';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import React, { useState } from 'react';
import { Label } from 'react-native-form-component';



const Dashboard = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (

    
    <SafeAreaView style={styles.page}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Hello World!</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <ScrollView style={styles.scrollView}>
      
      <View style={styles.blue} />
      <View style={styles.container}>
        <View style={styles.title}>
          <Text style={styles.label}>Profile Karyawan</Text>
        </View>
      </View>
      <View style={styles.container}>
        <View style={styles.title}>
          <Text style={styles.label}>User</Text>
          <Text style={styles.sublabel}>Riyan Aldiansyah</Text>
          <Text style={styles.sublabel}>2022020001</Text>
        </View>
      </View>
      <View style={styles.container}>
        <View style={styles.title}>
          <Text style={styles.label}>Biodata</Text>
          <View style={styles.detail}>
            <View style={styles.ket}>
              <Text style={styles.ket}>KTP</Text>
              <Text style={styles.ket}>BPJS</Text>
              <Text style={styles.ket}>JHT</Text>
              <Text style={styles.ket}>Alamat</Text>
              <Text style={styles.ket}>Tanggal Masuk</Text>
              <Text style={styles.ket}>Bagian</Text>
              <Text style={styles.ket}>Status</Text>
              <Text style={styles.ket}>Dept</Text>
            </View>
            <View style={styles.ket}>
              <Text style={styles.ket}>3311071006990004</Text>
              <Text style={styles.ket}>0002167007804</Text>
              <Text style={styles.ket}>22020956482</Text>
              <Text style={styles.ket}>Dk Dari Rt 002 Rw 004 Rejosari</Text>
              <Text style={styles.ket}>02 Feb 2022</Text>
              <Text style={styles.ket}>Office</Text>
              <Text style={styles.ket}>Junior Staff</Text>
              <Text style={styles.ket}>IT</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.container}>
        <View style={styles.title}>
          <Text style={styles.label}>Cuti</Text>
          <View style={styles.detail}>
            <View style={styles.ket}>
              <Text style={styles.ket}>Masa Kerja</Text>
              <Text style={styles.ket}>Jumlah Cuti</Text>
              <Text style={styles.ket}>Jumlah Pakai Cuti</Text>
              <Text style={styles.ket}>Jumlah Cuti Diuangkan</Text>
              <Text style={styles.ket}>Sisa Cuti</Text>
            </View>
            <View style={styles.ket}>
              <Text style={styles.ket}>8 bulan</Text>
              <Text style={styles.ket}>0 hari</Text>
              <Text style={styles.ket}>5 hari</Text>
              <Text style={styles.ket}>-</Text>
              <Text style={styles.ket}>-5 hari</Text>
            </View>
          </View>
          <View style={styles.btn}>
          <Pressable
            style={[styles.button, styles.buttonOpen]}
            onPress={() => setModalVisible(true)}
          >
            <Text style={styles.textStyle}>Detail</Text>
          </Pressable>
          </View>
        </View>
      </View>
      <View style={styles.container}>
        <View style={styles.title}>
          <Text style={styles.label}>Hari ini</Text>
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
      </ScrollView>
  </SafeAreaView>
  );
};

export default Dashboard;

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
  title:{
    position:'relative',
    backgroundColor: 'white',
    padding: 20,
    top:20,
    borderRadius:10,
  },
  sublabel:{
    color:'grey',

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
  txt:{
    color:'grey',
    paddingLeft:2,
    alignSelf:'flex-end',
  },
  detail:{
    flexDirection:'row',
    flexWrap:'wrap',
  },
  btn:{
    paddingTop:10,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
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
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#2196F3',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  }
});
