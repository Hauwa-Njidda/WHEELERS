import React from 'react';
import { StyleSheet, Text, View ,SafeAreaView, Button ,Image, TextInput, TouchableOpacity,ScrollView } from 'react-native';

export default function Profile() {
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

<Text style={styles.Text1 } >ID 45742</Text>
<Text style={styles.Text1 } >ID 45742</Text>
<Text style={styles.columnText1} allowFontScaling={false}>Edit Profile</Text>

<ScrollView vertical={true}>
<View style = {styles.containersicon1}>
<Image source =
{require('/Users/hauwakulunjidda/WHEELERS/assets/cc.jpeg')} style={styles.imageshape2}/>
<Text style={styles.columnText} allowFontScaling={false}>Join Community</Text>
<Text style={styles.columnText} allowFontScaling={false}>120 Members</Text>

<Text style={styles.columnText1} allowFontScaling={false}>Join</Text>

</View>
<View style = {styles.containersicon1}>
<Image source =
{require('/Users/hauwakulunjidda/WHEELERS/assets/cycl.jpeg')} style={styles.imageshape2}/>
<Text style={styles.columnText} allowFontScaling={false}>Join Community</Text>
<Text style={styles.columnText} allowFontScaling={false}>120 Members</Text>

<Text style={styles.columnText1} allowFontScaling={false}>Join</Text>

</View>
<View style = {styles.containersicon1}>
<Image source =
{require('/Users/hauwakulunjidda/WHEELERS/assets/kids_bike_club.jpeg')} style={styles.imageshape2}/>
<Text style={styles.columnText} allowFontScaling={false}>Join Community</Text>
<Text style={styles.columnText} allowFontScaling={false}>120 Members</Text>

<Text style={styles.columnText1} allowFontScaling={false}>Join</Text>

</View>
<View style = {styles.containersicon1}>
<Image source =
{require('/Users/hauwakulunjidda/WHEELERS/assets/cyy.jpeg')} style={styles.imageshape2}/>
<Text style={styles.columnText} allowFontScaling={false}>Join Community</Text>
<Text style={styles.columnText} allowFontScaling={false}>120 Members</Text>

<Text style={styles.columnText1} allowFontScaling={false}>Join</Text>

</View>
<View style = {styles.containersicon1}>
<Image source =
{require('/Users/hauwakulunjidda/WHEELERS/assets/kids_bike_club.jpeg')} style={styles.imageshape2}/>
<Text style={styles.columnText} allowFontScaling={false}>Join Community</Text>
<Text style={styles.columnText} allowFontScaling={false}>120 Members</Text>

<Text style={styles.columnText1} allowFontScaling={false}>Join</Text>

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
width:150, 
height:150,  
marginLeft:20,
borderRadius: 100,
},

imageshape2:{
  width:100, 
  height:100,  
  marginLeft:20,
  borderWidth: 1, 
  borderRadius: 1,
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