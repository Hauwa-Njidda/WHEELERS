import React from 'react';
import { StyleSheet, Text, View ,SafeAreaView, Button ,Image, TextInput, TouchableOpacity,ScrollView } from 'react-native';

export default function Register() {
    return (
      <SafeAreaView style={styles.container}>

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
<Text style={styles.columnText} allowFontScaling={false}>-----------------------------------------------------------</Text>
</ScrollView>

<ScrollView vertical={true}>
<View style = {styles.containersicon1}>
<Image source =
{require('/Users/hauwakulunjidda/WHEELERS/assets/kids_bike_club.jpeg')} style={styles.imageshape2}/>
<Text style={styles.columnText} allowFontScaling={false}>Join Community</Text>
<Text style={styles.columnText} allowFontScaling={false}>120 Members</Text>
<View style = {styles.containersicon11}>
<Text style={styles.columnText1} allowFontScaling={false}>View all</Text>
</View>
</View>
<View style = {styles.containersicon1}>
<Image source =
{require('/Users/hauwakulunjidda/WHEELERS/assets/kids_bike_club.jpeg')} style={styles.imageshape2}/>
<Text style={styles.columnText} allowFontScaling={false}>Join Community</Text>
<Text style={styles.columnText} allowFontScaling={false}>120 Members</Text>
<View style = {styles.containersicon11}>
<Text style={styles.columnText1} allowFontScaling={false}>View all</Text>
</View>
</View>
</ScrollView>

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
fontWeight:'500',
},
Text2:{
  color: 'white',
  fontSize: 15,
   
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
height:220,  
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
  paddingLeft: 16,

},
columnText1:{
  color:'blue',
  alignItems: 'flex-start',
  paddingLeft: 16,

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
  padding: 2,
  margin: 7,
  width: 390,
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

  containersicon11 :{
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems :'center',
    borderWidth : 1,
    borderColor: 'white',
    borderRadius: 10,
    padding: 6,
    margin: 8,
    width:70,
    },
})