import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import axios from 'axios';

export default function App(){


  const [id , setId] = useState(' ');

  this.state = {
    status: ' ',
    message: ' ',
  }

  del = (id) => {
    console.log("helo from del")
    axios.get(`http://dummy.restapiexample.com/api/v1/delete/{id}`)
      .then ((response)=>{
      this.setState({
        status: response.status,
        message: response.message,
      })
      
      })
    
    .catch((error) => {
      console.log(error)
    })


    if(this.state.stauts == 'success'){
      alert("Deleted employee detail successfully.")
    }
    else{
      alert("Error occurs, Check the employee ID.")
    }
  }
  return (
    <View style = {styles.container}>
      <Text>Enter the ID :</Text>
      <TextInput 
        keyboardType='numeric'
        style = {styles.input}
        placeholder='eg : 43'
        onChangeText={(val) => setId(val)}
      />
      <Text>ID : {id}</Text>
      <Button
        // onPress={this.del({id})}
        title="DELETE"
        color="#0033cc"
      />
    </View>
  );
}


const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input:{
    borderWidth: 1,
    borderColor: '#777',
    padding: 8 ,
    margin: 10,
    width: 200,
  }
})