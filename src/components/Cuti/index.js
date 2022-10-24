/* eslint-disable prettier/prettier */
import { StyleSheet,
    Text,
    View,
    SafeAreaView,
    Image,
    Modal,
    Alert,
    Pressable,
    Button} from 'react-native';
import React, { useState } from 'react';
import Images from '../../assets';


const Cuti = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.container}>
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
                onPress={() => setModalVisible(!modalVisible)} >
                <Image source={Images.ICClose}/>
              </Pressable>
            <Text style={styles.modalText}>Tanggal efeosomesv  fewe fef wefew f fe fw f effe frfe f</Text>
          </View>
        </View>
      </Modal>
      <View style={styles.title}>
        <Text style={styles.label}>Cuti</Text>
        <View style={styles.breakLine} />
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
            onPress={() => setModalVisible(true)}>
            <Text style={styles.textStyle}>Detail</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default Cuti;

const styles = StyleSheet.create({
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
      breakLine: {
        backgroundColor: '#F2F2F2',
        marginVertical: 8,
        height: 1,
      },
});
