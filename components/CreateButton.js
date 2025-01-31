import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import AppTheme from '../AppTheme';

const CreateButton = ({onCreate, edit}) => {
    const create = () => {
        onCreate();
    }
    return (
        <TouchableOpacity style={styles.create} onPress={create}>
            <Text style={styles.text}>{edit ? 'Confirm changes' : 'Create task'}</Text>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    create: {
        backgroundColor: AppTheme.LightColors.primary,
        padding: 10
    },
    text: {
        fontSize: 22,
        color: 'white',
        textAlign: 'center'
    }
});

export default CreateButton;
