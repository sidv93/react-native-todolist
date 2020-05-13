import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import AppTheme from '../AppTheme';
import { useNavigation } from '@react-navigation/native';

const AddButton = () => {
    const navigation = useNavigation();
    return (
        <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('NewTask')}>
            <Text style={styles.plus}>+</Text>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: AppTheme.LightColors.primary,
        position: 'absolute',
        bottom: 40,
        right: 30,
        height: 80,
        width: 80,
        borderRadius: 50,
        elevation: 15
    },
    plus: {
        fontSize: 48,
        color: AppTheme.TextColors.primary,
        textAlign: 'center',
        margin: 6
    }
});

export default AddButton;
