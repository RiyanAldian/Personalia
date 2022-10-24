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
import React, { useState } from 'react';
import { Label } from 'react-native-form-component';
import Images from '../../assets';
import component, { Biodata } from '../../components';
import Today from '../../components/Today';



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
            <Text style={styles.modalTitle}>Detail Hari Kerja</Text>
            <Pressable
                style={ styles.buttonClose}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Image source={Images.ICClose}/>
              </Pressable>
            <Text style={styles.modalText}>Tanggal efeosomesv  fewe fef wefew f fe fw f effe frfe f</Text>
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
     <Biodata/>
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
     <Today/>
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
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#2196F3',
  },
  buttonClose: {
    backgroundColor: 'white',
    position:'absolute',
    alignSelf:'flex-end',
    padding:6,
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
});
