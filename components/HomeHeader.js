import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppTheme from '../AppTheme';

const HomeHeader = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Home</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        marginVertical: 20,
        marginHorizontal: 30
    },
    header: {
        fontSize: 36,
        fontFamily: AppTheme.Font.family,
        fontWeight: 'bold'
    }
});

export default HomeHeader;
