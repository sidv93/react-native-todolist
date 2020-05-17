import React, { useState } from 'react';
import { StyleSheet, Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback, View, AsyncStorage } from 'react-native';
import AppTheme from '../AppTheme';
import Constants from 'expo-constants';
import CreateButton from '../components/CreateButton';
import NewTaskHeader from '../components/NewTaskHeader';
import AddTask from '../components/AddTask';
import TaskDetails from '../components/TaskDetails';
import storageApis from '../asyncstorageutil';
import { useNavigation } from '@react-navigation/native';
import TaskStore from '../store/tasks';

const NewTask = () => {
    const [title, setTitile] = useState('');
    const [description, setDescription] = useState('');
    const [dateTime, setDateTime] = useState();
    const [tag, setTag] = useState('');
    const navigation = useNavigation();
    const onCreate = () => {
        console.log('title', title, 'description', description, 'datetime', dateTime, 'tag', tag);
        console.log('creating new task');
        const newTask = {
            title, description, tag, timestamp: dateTime
        };
        TaskStore.addTask(newTask)
        .then(() => {
            navigation.goBack();
        });
    };

    return (
        <KeyboardAvoidingView style={styles.container} behavior={'height'}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={{ flex: 1 }}>
                    <NewTaskHeader />
                    <AddTask
                        onTitleChange={setTitile}
                        onDescriptionChange={setDescription} />
                    <TaskDetails
                        onDateTimeChange={setDateTime}
                        onTagChange={setTag} />
                    <CreateButton onCreate={onCreate} />
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: AppTheme.LightColors.secondary,
        paddingTop: Constants.statusBarHeight
    }
});

export default NewTask;
