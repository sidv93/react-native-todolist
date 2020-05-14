import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import AppTheme from '../AppTheme';
import { useNavigation } from '@react-navigation/native';

const CreateButton = ({onCreate}) => {
    const navigation = useNavigation();
    const create = () => {
        onCreate();
        navigation.goBack();
    }
    return (
        <TouchableOpacity style={styles.create} onPress={create}>
            <Text style={styles.text}>Create</Text>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    create: {
        backgroundColor: AppTheme.LightColors.primary,
        padding: 10
    },
    text: {
        fontSize: 24,
        color: 'white',
        textAlign: 'center'
    }
});

export default CreateButton;
