import React from 'react';
import { createStackNavigator} from '@react-navigation/stack';
import { NavigationContainer} from '@react-navigation/native';
import { StyleSheet, Text, View,Image,SafeAreaView } from 'react-native';
import Login from './component/Login';
import Register from './component/Register';
import Home from './component/Home';
import Search from './component/Search';
import Solorun from './component/Solorun';
import Choose from './component/Choose';
import Grouprun from './component/Grouprun';

export default function App() {
 
  return (
    <View style={styles.container}>         
          <Login/>
    </View>
)};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
