import React, { useState } from 'react';
import { StyleSheet, Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback, View } from 'react-native';
import AppTheme from '../AppTheme';
import Constants from 'expo-constants';
import CreateButton from '../components/CreateButton';
import NewTaskHeader from '../components/NewTaskHeader';
import AddTask from '../components/AddTask';
import TaskDetails from '../components/TaskDetails';
import { useNavigation, useRoute } from '@react-navigation/native';
import TaskStore from '../store/tasks';
import DeleteTask from '../components/DeleteTask';

const EditTask = () => {
    const route = useRoute();
    const { taskId } = route.params;
    const task = TaskStore.getTaskById(taskId);
    const [title, setTitile] = useState(task.title);
    const [description, setDescription] = useState(task.description);
    const [dateTime, setDateTime] = useState(task.timestamp);
    const [tag, setTag] = useState(task.tag);
    const navigation = useNavigation();
    const onEdit = () => {
        task.setEditDetails({ tag, description, timestamp: dateTime });
        navigation.goBack();
    };

    return (
        <KeyboardAvoidingView style={styles.container} behavior={'height'}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={{ flex: 1 }}>
                    <NewTaskHeader edit={true} task={task} />
                    <AddTask
                        edit={true}
                        task={task}
                        onTitleChange={setTitile}
                        onDescriptionChange={setDescription} />
                    <TaskDetails
                        edit={true}
                        task={task}
                        onDateTimeChange={setDateTime}
                        onTagChange={setTag} />
                        
                    <CreateButton edit={true} onCreate={onEdit} />
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

export default EditTask;
