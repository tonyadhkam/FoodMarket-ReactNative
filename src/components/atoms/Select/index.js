import { StyleSheet, Text, View } from 'react-native';
import {Picker} from '@react-native-picker/picker';
import React from 'react';

const Select = ({label}) => {
  return (
    <View>
        <Text style={styles.label}>{label}</Text>
        <View style={styles.inputSelect}>
            <Picker
            // selectedValue={selectedLanguage}
            // onValueChange={(itemValue, itemIndex) =>
            //     setSelectedLanguage(itemValue)
            // }
            >
                <Picker.Item style={styles.text} label="Tuban" value="java" />
                <Picker.Item style={styles.text} label="Malang" value="js" />
            </Picker>
        </View>
    </View>
  );
};

export default Select;

const styles = StyleSheet.create({
    label : {fontSize: 16, fontFamily: 'Poppins-Reguler', color: '#020202' },
    inputSelect : {borderWidth: 1, borderColor: '#020202', borderRadius: 8, paddingHorizontal: 0, paddingVertical: 0, marginTop: 4},
    text : {fontSize: 14, color: '#A8A8A8'}
});
