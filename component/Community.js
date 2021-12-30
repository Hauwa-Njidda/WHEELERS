import React from 'react';
import { StyleSheet, Text, View ,SafeAreaView, Button ,Image, TextInput, TouchableOpacity,ScrollView } from 'react-native';
import CPage from '/Users/hauwakulunjidda/WHEELERS/component/CPage.js';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



const Stack = createNativeStackNavigator();
const Communi = () =>{
      return (
         <CommunityPage/>
      );    
};


function CommunityScreen({ navigation }) {
  const pressHandler =() =>{
    navigation.navigate('CommunityPage');
  }



    return (
      <SafeAreaView style={styles.container}>


<View style = {styles.containersicon}>
<Image style={styles.icon} source={require("/Users/hauwakulunjidda/WHEELERS/assets/bell.png")} />
<Image style={styles.icon} source={require("/Users/hauwakulunjidda/WHEELERS/assets/profilee.png")} />
</View>
      
<View style={styles.imageshape1}>

  <View >
<Image source =
{require('/Users/hauwakulunjidda/WHEELERS/assets/cyy.jpeg')}
style={styles.imageshape}
/>

  </View>
  
</View>
<View style = {styles.
containersicon}>
<Text style={styles.columnText} allowFontScaling={false}>Popular Clubs Near You</Text>

</View>

<ScrollView vertical={true}>
<View style = {styles.containersicon1}>
<Image source =
{require('/Users/hauwakulunjidda/WHEELERS/assets/cc.jpeg')} style={styles.imageshape2}/>
<Text style={styles.columnText} allowFontScaling={false}>Join Community</Text>
<Text style={styles.columnText} allowFontScaling={false}>120 Members</Text>
<TouchableOpacity style={styles.outside} >
<Button title="Join" onPress={(pressHandler) => navigation.navigate('CommunityPage')}>Join</Button>
</TouchableOpacity>
</View>
<View style = {styles.containersicon1}>
<Image source =
{require('/Users/hauwakulunjidda/WHEELERS/assets/cycl.jpeg')} style={styles.imageshape2}/>
<Text style={styles.columnText} allowFontScaling={false}>Join Community</Text>
<Text style={styles.columnText} allowFontScaling={false}>120 Members</Text>
<TouchableOpacity style={styles.outside} >
<Button title="Join" onPress={(pressHandler) => navigation.navigate('CommunityPage')}>Join</Button>
</TouchableOpacity>
</View>
<View style = {styles.containersicon1}>
<Image source =
{require('/Users/hauwakulunjidda/WHEELERS/assets/kids_bike_club.jpeg')} style={styles.imageshape2}/>
<Text style={styles.columnText} allowFontScaling={false}>Join Community</Text>
<Text style={styles.columnText} allowFontScaling={false}>120 Members</Text>

<TouchableOpacity style={styles.outside} >
<Button title="Join" onPress={(pressHandler) => navigation.navigate('CommunityPage')}>Join</Button>
</TouchableOpacity>
</View>
<View style = {styles.containersicon1}>
<Image source =
{require('/Users/hauwakulunjidda/WHEELERS/assets/cyy.jpeg')} style={styles.imageshape2}/>
<Text style={styles.columnText} allowFontScaling={false}>Join Community</Text>
<Text style={styles.columnText} allowFontScaling={false}>120 Members</Text>
<TouchableOpacity style={styles.outside} >
<Button title="Join" onPress={(pressHandler) => navigation.navigate('CommunityPage')}>Join</Button>
</TouchableOpacity>
</View>
<View style = {styles.containersicon1}>
<Image source =
{require('/Users/hauwakulunjidda/WHEELERS/assets/kids_bike_club.jpeg')} style={styles.imageshape2}/>
<Text style={styles.columnText} allowFontScaling={false}>Join Community</Text>
<Text style={styles.columnText} allowFontScaling={false}>120 Members</Text>
<TouchableOpacity style={styles.outside} >
<Button title="Join" onPress={(pressHandler) => navigation.navigate('CommunityPage')}>Join</Button>
</TouchableOpacity>
</View>

</ScrollView>
      </SafeAreaView>      
 );

    }


    export default function Community() {
      return (
        <NavigationContainer independent={true}>
          <Stack.Navigator>
          <Stack.Screen name="Community" component={CommunityScreen} style={styles.container} />
          <Stack.Screen name="CommunityPage" component={CPage} style={styles.container} />
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
Text1:{
color: 'white',
fontSize: 35,

fontWeight:'500',
width: 340,
},
Text2:{
  color: 'white',
  fontSize: 15,
  width: 340,
   margin : 7,
  },
    Text3:{
      color: 'white',
    fontSize: 20, 
    fontWeight:'700',
    paddingHorizontal: 10,
    },
    
  imageshape1:{
  height:220,
  marginTop:10,
    },

imageshape:{ 
width:350, 
height:210,  
marginLeft:20,
borderColor:"white", 
borderWidth: 1, 
borderRadius: 10,
},

imageshape2:{
  width:100, 
  height:100,  
  marginLeft:20,
  borderWidth: 1, 
  borderRadius: 10,
},

columnText:{
  color:'white',
  flex: 10,
  alignItems: 'flex-start',
  paddingLeft: 15,


},
columnText1:{
  color:'white',
paddingHorizontal: 10,
  backgroundColor : "blue",
  padding: 5,
},


containersicon :{
  flexDirection: 'row',
  justifyContent: 'space-around',
  alignItems :'center',
  padding: 1,
  width: 370,
 
  },


  containersicon1 :{
  flexDirection: 'row',
  justifyContent: 'space-around',
  alignItems :'center',
  borderWidth : 1,
  borderColor: 'white',
  borderRadius: 10,
  padding: 6,
  margin: 8,
  width: 340,
  },


        icon: {
          width: 30,  
          height: 30,
          
          },

})