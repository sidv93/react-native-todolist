import React from 'react';
import { StyleSheet, Text } from 'react-native';
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
        flex: 1
    },
    header: {
        fontSize: 24,
        fontFamily: AppTheme.Font.family
    }
});

export default HomeHeader;
