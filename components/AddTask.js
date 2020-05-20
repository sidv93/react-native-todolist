import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, KeyboardAvoidingView } from 'react-native';
import AppTheme from '../AppTheme';

const AddTask = ({onTitleChange, onDescriptionChange, edit, task}) => {
    const [title, setTitle] = useState((task && task.title) || '');
    const [description, setDescription] = useState((task && task.description) || '');
    const onChangeTitle = (value) => {
        setTitle(value);
        onTitleChange(value);
    }
    const onChangeDescription = (value) => {
        setDescription(value);
        onDescriptionChange(value);
    }
    return (
        <KeyboardAvoidingView style={styles.container} behavior={'height'}>
            <Text style={styles.label}>Task Title</Text>
            <TextInput
                multiline={false}
                placeholder={'Title'}
                style={styles.taskTitle}
                onChangeText={onChangeTitle}
                value={title}
                editable={edit ? false : true}
            />
            <Text style={styles.label}>What are you planning?</Text>
            <TextInput
                multiline={true}
                placeholder={'Description'}
                numberOfLines={3}
                style={styles.taskInput}
                onChangeText={onChangeDescription}
                value={description}
            />
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        flex: 1
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
