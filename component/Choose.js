import React from 'react';
import { StyleSheet, Text, View ,SafeAreaView, Button ,Image, TextInput, TouchableOpacity,ScrollView } from 'react-native';
import Solorun from '/Users/hauwakulunjidda/WHEELERS/component/Solorun.js';
import Grouprun from '/Users/hauwakulunjidda/WHEELERS/component/Grouprun.js';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();
const SoloPage = () =>{
      return (
         <SoloScreen/>
      );    
};
const GroupPage = () =>{
  return (
     <GroupScreen/>
  );
};
function ChooseScreen({ navigation }) {
  const pressHandler =() =>{
    navigation.navigate('SoloScreen');
  }
  const pressHandler1 =() =>{
    navigation.navigate('GroupScreen');
  }
  

    return (
        <SafeAreaView style={styles.container}>
  <View style = {styles.containersiconimage}>
  <Image style={styles.icon} source={require("/Users/hauwakulunjidda/WHEELERS/assets/bell.png")} />
  <Image style={styles.icon} source={require("/Users/hauwakulunjidda/WHEELERS/assets/profilee.png")} />
  </View>
     <Text style={styles.Text1 } >RIDE: </Text>
     <TouchableOpacity style={styles.outside} >
<Button title="SOLO" onPress={(pressHandler) => navigation.navigate('SoloScreen')}>SOLO</Button>
</TouchableOpacity>
<TouchableOpacity style={styles.outside} >
<Button title="GROUP" onPress={(pressHandler) => navigation.navigate('GroupScreen')}>GROUP</Button>
</TouchableOpacity>
        </SafeAreaView>
        
   );
      }


      export default function Choose() {
        return (
          <NavigationContainer independent={true}>
            <Stack.Navigator>
            <Stack.Screen name="Choose" component={ChooseScreen} style={styles.container} />
            <Stack.Screen name="SoloScreen" component={Solorun} style={styles.container} />
            <Stack.Screen name="GroupScreen" component={Grouprun} style={styles.container} />
            </Stack.Navigator>
            
          </NavigationContainer>
        )
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
  outside:{
    color:'white',
    paddingHorizontal: 80,
      backgroundColor : "blue",
      padding: 10,
      fontSize: 50,
  bottom: 50,
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