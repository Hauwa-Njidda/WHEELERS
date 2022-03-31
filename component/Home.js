import React from 'react';
import { StyleSheet, Text, View ,SafeAreaView, Button ,Image, TextInput, TouchableOpacity,ScrollView } from 'react-native';
import Community from '/Users/hauwakulunjidda/WHEELERS/component/Community.js';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();
const Communitypage = () =>{
      return (
         <CommunityScreen/>
      );    
};

function HomeScreen({ navigation }) {
  const pressHandler =() =>{
    navigation.navigate('CommunityScreen');
  }
  

    return (
      <SafeAreaView style={styles.container}>
<View style = {styles.containersicon}>
<Image style={styles.icon} source={require("/Users/hauwakulunjidda/WHEELERS/assets/bell.png")} />
<Image style={styles.icon} source={require("/Users/hauwakulunjidda/WHEELERS/assets/profilee.png")} />
</View>
        <Text style={styles.Text1 } >Explore and </Text>
        <Text style={styles.Text1}>Experience</Text>      
          <Text style={styles.Text2}>Discover our best experience</Text>

<ScrollView scrollEventThrottle={16}>
<View style = {styles.containersicon}>
<Text style={styles.columnText11} allowFontScaling={false}>Road</Text>
<Text style={styles.columnText} allowFontScaling={false}>Mountain</Text>
<Text style={styles.columnText} allowFontScaling={false}>Tandem</Text>
<Text style={styles.columnText} allowFontScaling={false}>Cyclocross</Text>

</View>

<View style={styles.imageshape1}>
<ScrollView  horizontal={true}>
  <View >
<Image source =
{require('/Users/hauwakulunjidda/WHEELERS/assets/yKBtKFXCnKiaxShN9TwP3Z.jpeg')}
style={styles.imageshape}
/>
  </View>
  <View >
<Image source =
{require('/Users/hauwakulunjidda/WHEELERS/assets/into-the-sunset-royalty-free-image-1587501795.jpeg')}
style={styles.imageshape}
/>
  </View>
  <View >
<Image source =
{require('/Users/hauwakulunjidda/WHEELERS/assets/kids_bike_club.jpeg')}
style={styles.imageshape}
/>
  </View>
  
</ScrollView>

</View>
<View style = {styles.
containersicon}>
<Text style={styles.columnText} allowFontScaling={false}>Join Community</Text>
<Text style={styles.columnText1} allowFontScaling={false}>View all</Text>

</View>

</ScrollView>

<ScrollView vertical={true}>
<View style = {styles.containersicon1}>
<Image source =
{require('/Users/hauwakulunjidda/WHEELERS/assets/kids_bike_club.jpeg')} style={styles.imageshape2}/>
<Text style={styles.columnText} allowFontScaling={false}>Join Community</Text>
<Text style={styles.columnText} allowFontScaling={false}>120 Members</Text>
<TouchableOpacity style={styles.outside} >
<Button title="Join" onPress={(pressHandler) => navigation.navigate('CommunityScreen')}>Join</Button>
</TouchableOpacity>
</View>
<View style = {styles.containersicon1}>
<Image source =
{require('/Users/hauwakulunjidda/WHEELERS/assets/kids_bike_club.jpeg')} style={styles.imageshape2}/>
<Text style={styles.columnText} allowFontScaling={false}>Join Community</Text>
<Text style={styles.columnText} allowFontScaling={false}>120 Members</Text>
<TouchableOpacity style={styles.outside} >
<Button title="Join" onPress={(pressHandler) => navigation.navigate('CommunityScreen')}>Join</Button>
</TouchableOpacity>
</View>
</ScrollView>
      </SafeAreaView>    
 );

}

    export default function Home() {
      return (
        <NavigationContainer independent={true}>
          <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} style={styles.container} />
          <Stack.Screen name="CommunityScreen" component={Community} style={styles.container} />
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
width:200, 
height:200,  
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

})