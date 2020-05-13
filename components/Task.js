import React from 'react';
import { StyleSheet, View, Text, CheckBox } from 'react-native';
import AppTheme from '../AppTheme';

const Task = ({ task }) => {
    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={styles.taskName}>{task.title}</Text>
                <Text style={styles.taskDate}>{task.timestamp}</Text>
            </View>
            <CheckBox center checkedColor={"blue"}
                uncheckedColor={AppTheme.TextColors.taskTimeColor} checked={false} />
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        paddingVertical: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    textContainer: {

    },
    taskName: {
        textTransform: 'capitalize',
        fontSize: 22,
        fontWeight: '400'
    },
    taskDate: {
        fontSize: 18
    }
});

export default Task;
