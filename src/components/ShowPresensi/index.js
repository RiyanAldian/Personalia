/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View} from 'react-native';
import React,{ Component } from 'react';
import { Table ,TableWrapper,Rows,Row} from 'react-native-table-component';

// export default function ShowPresensi() {
export class ShowPresensi extends Component {
    constructor(props) {
        // console.log(bio);
        super(props);
        this.state = {
            tableHead: ['Tanggal', 'Masuk', 'Pulang', 'Status'],
            tableData: [
                ['01/11/2022', '06:20','16:32','Kerja'],
                ['01/11/2022', '06:20','16:32','Kerja'],
                ['01/11/2022', '06:20','16:32','Kerja'],
                ['01/11/2022', '06:20','16:32','Kerja'],
                ['01/11/2022', '06:20','16:32','Kerja'],
            ],
        };
      }

    render() {
        const state = this.state;
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
