import React from 'react';
import { StyleSheet, Text, View ,SafeAreaView, Button ,Image, TextInput, TouchableOpacity,ScrollView } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '/Users/hauwakulunjidda/WHEELERS/component/Home.js';
import Choose from '/Users/hauwakulunjidda/WHEELERS/component/Choose.js';
import Search from '/Users/hauwakulunjidda/WHEELERS/component/Search.js';
import Community from '/Users/hauwakulunjidda/WHEELERS/component/Community.js';
import Profile from '/Users/hauwakulunjidda/WHEELERS/component/Profile.js';
import Login from '/Users/hauwakulunjidda/WHEELERS/component/Login.js';


const Tab = createBottomTabNavigator();
function MyTabs() {
  return (
    <Tab.Navigator>
     
      <Tab.Screen name="Login" component={Login}/>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="Choose" component={Choose} /> 
      <Tab.Screen name="Community" component={Community} />   
      <Tab.Screen name="Profile" component={Profile} />   
    </Tab.Navigator>
  );
}
const styles = StyleSheet.create({

})
export default MyTabs;