import React from 'react';

import { StyleSheet, Text, View ,SafeAreaView, Button ,Image, TextInput, TouchableOpacity } from 'react-native';

export default function Solorun() {
 
    return (
      <SafeAreaView style={styles.container}>

        <Text style={styles.Text1 } >START</Text>
        <Image style={styles.icon1} source={require("/Users/hauwakulunjidda/WHEELERS/assets/map.png")} />


<View style = {styles.containersicon}>
<Text style={styles.columnText} allowFontScaling={false}>Distance 0ft</Text>
<Text style={styles.columnText} allowFontScaling={false}>Speed 0.0mph</Text>
</View>   
<View style = {styles.
containersicon}>
<Text style={styles.columnText} allowFontScaling={false}>Elevation Gain 0ft</Text>
<Text style={styles.columnText} allowFontScaling={false}>Duration 2:57</Text>
</View>
       
<Image style={styles.icon} source={require("/Users/hauwakulunjidda/WHEELERS/assets/pause.png")} />



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
     containersicon :{
  flexDirection: 'row',
  justifyContent: 'space-around',
  alignItems :'center',
  padding: 1,
  width: 390,

  },
  columnText:{
    color:'white',
    flex: 10,
    alignItems: 'flex-start',
    paddingLeft: 30,
    fontSize: 30,
    fontWeight:'500',
  }, 
  icon: {
    width: 90,  
    height: 80,
    
    },
    icon1: {
        width: 400,  
        height: 400,
        
        },
})