import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, TextInput, KeyboardAvoidingView } from 'react-native';
import AppTheme from '../AppTheme';
import TaskDetails from './TaskDetails';

const AddTask = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    return (
        <KeyboardAvoidingView style={styles.container} behavior={'height'}>
            <Text style={styles.label}>Task Title</Text>
            <TextInput
                multiline={false}
                placeholder={'Title'}
                style={styles.taskTitle}
                onChangeText={text => setTitle(text)}
                value={title}
            />
            <Text style={styles.label}>What are you planning?</Text>
            <TextInput
                multiline={true}
                placeholder={'Description'}
                numberOfLines={3}
                style={styles.taskInput}
                onChangeText={text => setDescription(text)}
                value={description}
            />
            <TaskDetails />
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        flex: 2
    },
    label: {
        color: AppTheme.TextColors.sectionColor
    },
    taskInput: {
        height: 60,
        borderBottomWidth: 0.5,
        borderBottomColor: AppTheme.TextColors.sectionColor,
        marginBottom: 20,
        fontSize: 20,
        color: AppTheme.TextColors.sectionColor
    },
    taskTitle: {
        height: 40,
        borderBottomWidth: 0.5,
        borderBottomColor: AppTheme.TextColors.sectionColor,
        marginBottom: 30,
        fontSize: 18,
        color: AppTheme.TextColors.sectionColor
    }
});

export default AddTask;
