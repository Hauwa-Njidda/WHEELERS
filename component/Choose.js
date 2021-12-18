import React from 'react';
import { StyleSheet, Text, View ,SafeAreaView, Button ,Image, TextInput, TouchableOpacity,ScrollView } from 'react-native';

export default function Choose() {
    return (
        <SafeAreaView style={styles.container}>
  <View style = {styles.containersiconimage}>
  <Image style={styles.icon} source={require("/Users/hauwakulunjidda/WHEELERS/assets/bell.png")} />
  <Image style={styles.icon} source={require("/Users/hauwakulunjidda/WHEELERS/assets/profilee.png")} />
  </View>
     <Text style={styles.Text1 } >RIDE: </Text>
  <Text style={styles.Text} allowFontScaling={false}>SOLO</Text>
  <Text style={styles.Text11} allowFontScaling={false}>GROUP</Text>
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
  
  Text:{
      color:'white',
      paddingHorizontal: 100,
        backgroundColor : "blue",
        fontSize: 50,
        padding: 10,
    bottom: 130,
  },
  Text11:{
    color:'white',
    paddingHorizontal: 80,
      backgroundColor : "blue",
      padding: 10,
      fontSize: 50,
  bottom: 50,
},
  Text1:{
  color: 'white',
  fontSize: 35,
  fontWeight:'500',
  bottom:200,
  fontSize: 50,
  },

    containersiconimage :{
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems :'center',
      width: 490,
      bottom:250,
      },

     icon: {
            width: 25,  
            height: 25,
            
            },
  
  })