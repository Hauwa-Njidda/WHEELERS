import React from 'react';
import { StyleSheet, Text, View ,SafeAreaView, Button ,Image, TextInput, TouchableOpacity,ScrollView } from 'react-native';

export default function Search() {
    return (
      <SafeAreaView style={styles.container}>
<View style = {styles.containersiconimage}>
<Image style={styles.icon} source={require("/Users/hauwakulunjidda/WHEELERS/assets/bell.png")} />
<Image style={styles.icon} source={require("/Users/hauwakulunjidda/WHEELERS/assets/profilee.png")} />
</View>
   <Text style={styles.Text1 } >FIND </Text>
   
   <Text style={styles.Text2}>Start Location:</Text>
        <View style = {styles.searchbar}>
        <Image style={styles.icon1} source={require("/Users/hauwakulunjidda/WHEELERS/assets/location.png")} />
            </View>
         
<View style = {styles.
containersicon}>
<Text style={styles.columnText} allowFontScaling={false}>Within:</Text>
<Text style={styles.columnText} allowFontScaling={false}>50mi</Text>
</View>   
<View style = {styles.
containersicon}>
<Text style={styles.columnText} allowFontScaling={false}>Length:</Text>
<Text style={styles.columnText} allowFontScaling={false}>Any to Any</Text>
</View>

<Text style={styles.Text} allowFontScaling={false}>Search</Text>



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
    paddingHorizontal: 10,
      backgroundColor : "blue",
      padding: 10,
  bottom: 160,
},
Text1:{
color: 'white',
fontSize: 35,
fontWeight:'500',
bottom:200,
},
Text2:{
  color: 'white',
  fontSize: 30,
  width: 300,
   margin : 7,
   bottom:200,
  },
  searchbar :{
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems :'center',
    borderWidth : 1,
    borderColor: 'white',
    borderRadius: 10,
    padding: 10, 
    width: 300,
    height:50,
    backgroundColor :"white",
    bottom:190,
    },

columnText:{
  color:'white',
  flex: 10,
  alignItems: 'flex-start',
  paddingLeft: 30,
  fontSize: 30,
  bottom:180,
  fontWeight:'500',
},

columnText1:{
  color:'white',
paddingHorizontal: 10,
  backgroundColor : "blue",
  padding: 5,
},

columnText11:{
  color:'blue',
  flex: 10,
  alignItems: 'flex-start',
  paddingLeft: 16,

},

containersicon :{
  flexDirection: 'row',
  justifyContent: 'space-around',
  alignItems :'center',
  padding: 1,
  width: 390,

  },

  containersiconimage :{
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems :'center',
    width: 490,
    bottom:210,
    },

  containersicon1 :{
  flexDirection: 'row',
  justifyContent: 'space-around',
  alignItems :'center',
  borderWidth : 1,
  borderColor: 'white',
  borderRadius: 10,
  padding: 10,
  width: 340,
  bottom:-210,
  },


    row: {
      paddingBottom: 18,  
      marginBottom: 18,
      flexDirection: 'row', 
      alignItems: 'center',    
      justifyContent: 'space-between',   
      borderBottomWidth: 1,
      borderColor: 'rgba(204, 204, 204, 0.49)'
      
      },
      rowText: {
        flex: 1,
        fontSize: 13,
        marginLeft: 15
        
        },

        icon: {
          width: 25,  
          height: 25,
          
          },
 icon1: {
            width: 30,  
            height: 25,
            marginLeft:230,
            },

})