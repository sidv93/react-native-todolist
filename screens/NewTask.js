import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import AppTheme from '../AppTheme';
import Constants from 'expo-constants';

const NewTask = () => {
    return (
        <View style={styles.container}>
            <Text>Hello</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: AppTheme.LightColors.secondary,
        marginTop: Constants.statusBarHeight
    }
});

export default NewTask;
