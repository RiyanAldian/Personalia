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
import React, { useState,Component } from 'react';
import Images from '../../assets';
import { Table ,TableWrapper,Col,Rows} from 'react-native-table-component';

// const Cuti = () => {
//   const [modalVisible, setModalVisible] = useState(false);
//   return (
//     <View style={styles.container}>
//       <Modal
//         animationType="slide"
//         transparent={true}
//         visible={modalVisible}
//         onRequestClose={() => {
//           Alert.alert("Modal has been closed.");
//           setModalVisible(!modalVisible);
//         }}
//       >
//         <View style={styles.centeredView}>
//           <View style={styles.modalView}>
//             <Text style={styles.modalTitle}>Detail Hari Kerja</Text>
//             <Pressable
//                 style={ styles.buttonClose}
//                 onPress={() => setModalVisible(!modalVisible)} >
//                 <Image source={Images.ICClose}/>
//               </Pressable>
//             <Text style={styles.modalText}>Tanggal efeosomesv  fewe fef wefew f fe fw f effe frfe f</Text>
//           </View>
//         </View>
//       </Modal>
//       <View style={styles.title}>
//         <Text style={styles.label}>Cuti</Text>
//         <View style={styles.breakLine} />
//         <View style={styles.detail}>
//           <View style={styles.ket}>
//             <Text style={styles.ket}>Masa Kerja</Text>
//             <Text style={styles.ket}>Jumlah Cuti</Text>
//             <Text style={styles.ket}>Jumlah Pakai Cuti</Text>
//             <Text style={styles.ket}>Jumlah Cuti Diuangkan</Text>
//             <Text style={styles.ket}>Sisa Cuti</Text>
//           </View>
//           <View style={styles.ket}>
//             <Text style={styles.ket}>8 bulan</Text>
//             <Text style={styles.ket}>0 hari</Text>
//             <Text style={styles.ket}>5 hari</Text>
//             <Text style={styles.ket}>-</Text>
//             <Text style={styles.ket}>-5 hari</Text>
//           </View>
//         </View>
//         <View style={styles.btn}>
//           <Pressable
//             style={[styles.button, styles.buttonOpen]}
//             onPress={() => setModalVisible(true)}>
//             <Text style={styles.textStyle}>Detail</Text>
//           </Pressable>
//         </View>
//       </View>
//     </View>
//   );
// };


export class Cuti extends Component {
    constructor(props) {
      const bio = {
        'work' : 9,
        'cuti' : 0,
        'useCuti' : 5,
        'cutiUang' : '',
        'sisaCuti' : -5,
      };
      // console.log(bio);
      super(props);
      this.states = {
        tableData: [
          ['Masa Kerja', bio.work + ' Bulan'],
          ['Jumlah Cuti', bio.cuti + ' Hari'],
          ['Jumlah Pakai Cuti', bio.useCuti + ' Hari'],
          ['Jumlah Cuti Diuangkan', bio.cutiUang],
          ['Sisa Cuti', bio.sisaCuti + ' Hari'],
        ],
      };
    }
    state = {
      modalVisible: false,
    };
    setModalVisible = (visible) => {
      this.setState({ modalVisible: visible });
    }
    render() {
      const { modalVisible } = this.state;
      const state = this.states;
      // console.log(this.state)
    return (
      <View style={styles.container}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            this.setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Hello World!</Text>
              <Pressable
                style={[styles.button1, styles.buttonClose]}
                onPress={() => this.setModalVisible(!modalVisible)}
              >
                 <Image source={Images.ICClose}/>
              </Pressable>
            </View>
          </View>
        </Modal>
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
                <View style={styles.btn}>
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
        padding: 5,
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
