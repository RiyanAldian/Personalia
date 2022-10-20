/* eslint-disable prettier/prettier */
import { StyleSheet,
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
    Button,} from 'react-native';
import React, { useState } from 'react';
import Images from '../../assets';


const Cuti = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
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
            onPress={() => setModalVisible(true)}>
            <Text style={styles.textStyle}>Detail</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default Cuti;

const styles = StyleSheet.create({});
