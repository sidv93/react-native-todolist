import React from 'react';
import { StyleSheet, View, Text, CheckBox } from 'react-native';

const Task = ({ task }) => {
    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={styles.taskName}>{task.name}</Text>
                <Text style={styles.taskDate}>{task.timestamp}</Text>
            </View>
            <CheckBox center checked={false} />
        </View>
    )
};

const styles = StyleSheet.create({
    container: {

    },
    textContainer: {

    },
    taskName: {

    },
    taskDate: {
        
    }
});

export default Task;
