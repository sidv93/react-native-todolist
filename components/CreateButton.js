import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import AppTheme from '../AppTheme';
import { useNavigation } from '@react-navigation/native';

const CreateButton = () => {
    const navigation = useNavigation();
    return (
        <TouchableOpacity style={styles.create} onPress={() => navigation.goBack()}>
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
