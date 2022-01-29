import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { IlSuccessSignUp } from '../../assets';
import { Button, Gap } from '../../components';

const SuccesSignUp = () => {
  return (
    <View style={styles.page}>
        <IlSuccessSignUp />
        <Gap height={30} />
        <Text style={styles.title}>Yeay! Completed</Text>
        <Gap height={6} />
        <Text style={styles.subTitle}>Next you are able to order</Text>
        <Text style={styles.subTitle}>some foods as a self-reward</Text>
        <Gap height={30} />
        <View style={styles.buttonContainer}>
            <Button text='Find Foods'/>
        </View>
    </View>
  );
};

export default SuccesSignUp;

const styles = StyleSheet.create({
    page : {flex : 1, justifyContent:'center', alignItems:'center'},
    title : {fontSize: 22, fontFamily: 'Poppins-Reguler', color: '#020202'},
    subTitle : {fontSize: 16, fontFamily:'Popplins-Light', color: '#8D92A3'},
    buttonContainer : {width: '100%', paddingHorizontal: 80}
});
