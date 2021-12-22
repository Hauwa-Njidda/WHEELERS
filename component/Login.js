import React from 'react';
import { Component } from 'react';
import { StyleSheet, Text, View ,SafeAreaView, Button ,Image, TextInput, TouchableOpacity } from 'react-native';
import RegisterScreen from '/Users/hauwakulunjidda/WHEELERS/component/Register.js';

export default function LoginScreen({ navigation }) {
 
    return (
      <SafeAreaView style={styles.container}>

        <Text style={styles.Text1 } >WHEELERS</Text>
        <Text style={styles.Text2}>WELCOME</Text>
        <TextInput style={styles.input} placeholder = "Email"/>
        <TextInput style={styles.input} placeholder = "Password"/>
        <Text style={styles.Text3}>Forgotten Password?</Text>

        <TouchableOpacity style={styles.outside} >
          <Text style={styles.input1} >
            Login
          </Text>
        </TouchableOpacity>
        <Button title="New account? Register" onPress={() => navigation.navigate('RegisterScreen')}>New account? Register</Button>
        <Text style={styles.Text4}>Terms and Conditions</Text>
      </SafeAreaView>
 );
    }
  

const styles = StyleSheet.create({
 container:{
  flex: 1,
  backgroundColor: 'black',
  alignItems: 'center',
  justifyContent: 'center',
},

Text1:{
color: 'white',
fontSize: 40,
margin: 7,
},
Text2:{
  color: 'white',
  fontSize: 60, 
  },
  Text3:{
    color: 'white',
    fontSize: 15, 
    color:"yellow",
   left: 60,
    },
    Text33:{
      color: 'white',
      fontSize: 15, 
      color:"yellow",
      
      },
  
    Text4:{
      color: 'white',
      fontSize: 18,
      
      },

input:{
width: 300,
borderWidth: 2,
borderRadius: 100,
padding: 20,
margin: 7,
borderRadius: 100,
backgroundColor: "white",
},

input1:{
color: "white",
fontSize: 20,
  },

outside:{
    
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    alignSelf:"center",
    height: 55,
    width: 300,
    borderRadius: 300,
    backgroundColor: "blue",
    margin: 7,
      },  
      

})