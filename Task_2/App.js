import React,{Component} from 'react';
import { StyleSheet, Text, View, ActivityIndicator, Button, TextInput } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';
import axios from 'axios';

export default class App extends React.Component {

    constructor(props){
      super(props);
      this.state = {
        isLoading: true,
        dataSource: [],
        tableHead: ['ID', 'NAME', 'SALARY', 'AGE'],
      }
    }

    componentDidMount (){
      console.log("hello");
      axios.get('http://dummy.restapiexample.com/api/v1/employees')
          .then ((response)=>{
            this.setState({
              isLoading: false,
              dataSource: response.data.data,
            })
            console.log(this.state.dataSource);
            })
          
          .catch((error) => {
            console.log(error)
          });

        
    }


    render(){
      return(
      <View style={{backgroundColor: '#2B60DE'}}>
        <Text style={{color: "white", textAlign: 'center',paddingTop: 40,fontWeight: 'bold',fontSize: 20,}}>Employee Details</Text>
        {this.state.loading ? 
        
                  <View style={styles.container}>
                    <ActivityIndicator/>
                  </View>
        :
            
                      <View style={styles.container}>

                              <View style={{alignItems: 'center'}}>
                                <Text style={{paddingTop: 10}}>Search by ID : </Text><TextInput style={styles.input} keyboardType="default" placeholder='2' 
                                onChangeText={(val) => 
                                  axios.get(`http://dummy.restapiexample.com/api/v1/employee/{val}`)
                                      .then ((response)=>{
                                        this.setState({
                                          isLoading: false,
                                          dataSource: response.data.data,
                                        })
                                        console.log(this.state.dataSource);
                                        })
                                  }
                                />
                              </View>
                              <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
                                <Row data={this.state.tableHead} style={styles.head} textStyle={styles.text}/>
                                {this.state.dataSource.map((data, index) => (
                                  <Text style={styles.join} textStyle={styles.text}><Text style={{margin: 50}}>1</Text>                     |  <Text style={{margin: 5}}>Tiger Nixon</Text>         <Text style={{margin: 10}}>320800</Text>           <Text style={{margin: 5}}>61</Text></Text>
                                ))}
                                
                              </Table>
                        </View>
        }
        
                  </View>
                  );
              }
            }
    
            const styles = StyleSheet.create({
              container: {
                flex: 1,
                backgroundColor: '#fff',
                marginTop: 10,
              },
            
              item: {
                flex: 1,
                alignSelf: 'stretch',
                margin: 10,
                alignItems: 'center',
                justifyContent: 'center',
                borderBottomWidth: 1,
                borderBottomColor: 'black'
              },
              head: { height: 40, backgroundColor: '#82CAFF', marginTop: 60,},
              text: { margin: 2 },
              join: {height: 30, backgroundColor: '#f1f8ff',margin: 6, padding: 2 },
              input:{
                borderWidth: 1,
                borderColor: '#777',
                padding: 8 ,
                width: 100,
                alignItems: 'center',
              }
            });