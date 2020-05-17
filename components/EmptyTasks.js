import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import AppTheme from '../AppTheme';

const EmptyTasks = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Oops! Looks like you haven't added any tasks</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontSize: 16,
        color: AppTheme.TextColors.taskTimeColor
    }
});

export default EmptyTasks;
