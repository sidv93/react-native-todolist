import React, { useState } from 'react';
import { StyleSheet, Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback, View, AsyncStorage } from 'react-native';
import AppTheme from '../AppTheme';
import Constants from 'expo-constants';
import CreateButton from '../components/CreateButton';
import NewTaskHeader from '../components/NewTaskHeader';
import AddTask from '../components/AddTask';
import TaskDetails from '../components/TaskDetails';

const NewTask = () => {
    const [title, setTitile] = useState('');
    const [description, setDescription] = useState('');
    const [dateTime, setDateTime] = useState();
    const [tag, setTag] = useState('');
    const onCreate = async () => {
        console.log('title', title, 'description', description, 'datetime', dateTime, 'tag', tag);
        console.log('creating new task');
        const newTask = {
            title, description, tag, dateTime
        };
        try {
            const existing = await AsyncStorage.getItem(tag);
            console.log('existing', existing);
            if (!existing) {
                const newArr = [newTask];
                await AsyncStorage.setItem(tag, JSON.stringify(newArr));
            } else {
                // await AsyncStorage.removeItem(tag);
                const existingTasks = JSON.parse(existing);
                existingTasks.push(newTask);
                await AsyncStorage.setItem(tag, JSON.stringify(existingTasks));
            }
        } catch (e) {
            console.log('error while async storage', e);
        }
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
