/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View,ScrollView} from 'react-native';
import React,{ Component } from 'react';
import { Table ,TableWrapper,Col,Rows} from 'react-native-table-component';


export class Biodata extends Component {

    constructor(props) {
        const bio = {
          'KTP' : '3311071006990004',
          'BPJS' : '0002167007804',
          'JHT' : '22020956482',
          'Alamat' : 'Dk Dari Rt 002 Rw 004 Rejosari Polokarto Sukoharjo 087736026',
          'Tanggal_in' : '02 Feb 2022',
          'Bagian' : 'Office',
          'Status' : 'Junior Staff',
          'Dept' : 'IT',
        };
        // console.log(bio);
        super(props);
        this.state = {
          tableData: [
            ['KTP', bio.KTP],
            ['BPJS', bio.BPJS],
            ['JHT', bio.JHT],
            ['Alamat', bio.Alamat],
            ['Tanggal Masuk', bio.Tanggal_in ],
            ['Bagian', bio.Bagian],
            ['Status', bio.Status],
            ['Dept', bio.Dept],
          ],
        };
      }

  render() {
    const state = this.state;
    return (
        <View style={styles.container}>
            <View style={styles.title}>
            <Text style={styles.label}>Biodata</Text>
            <View style={styles.breakLine} />
                <View style={styles.table}>
                <Table borderStyle={{borderWidth: 0}}>
                <TableWrapper style={styles.wrapper}>
                    <Col data={state.tableTitle} style={styles.title} textStyle={styles.text}/>
                    <Rows data={state.tableData} flexArr={[1, 2]} style={styles.row} textStyle={styles.text}/>
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
