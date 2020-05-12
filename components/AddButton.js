import React from 'react';
import { StyleSheet, Text } from 'react-native';
import AppTheme from '../AppTheme';

const AddButton = () => {
    return (
        <View styles={styles.container}>
            <Text style={styles.plus}>+</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: AppTheme.LightColors.primary,
        borderRadius: 50,
        height: 50,
        width: 50
    },
    plus: {
        fontSize: 24,
        color: AppTheme.TextColors.primary
    }
});

export default AddButton;
