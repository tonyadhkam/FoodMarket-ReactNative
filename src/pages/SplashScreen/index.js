import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import { Logo } from '../../assets';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
        navigation.replace('SignIn')
    }, 3000)
  }, []) 
  return (
    <View style={{backgroundColor: '#FFC700', flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Logo />
        <View style={{height: 38}}/>
        <Text style={{fontSize: 32, color: '#020202', fontFamily: 'Poppins-Medium'}}>FoodMarket</Text>
    </View>
  );
}

export default SplashScreen;
