import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View,Image,SafeAreaView,Button } from 'react-native';

import MyTabs from './navigation/tabs';
import Login from '/Users/hauwakulunjidda/WHEELERS/component/Login';

const App = () => {
  return (   <NavigationContainer>
      <MyTabs/>
      
    </NavigationContainer>
  );
};


export default App;
