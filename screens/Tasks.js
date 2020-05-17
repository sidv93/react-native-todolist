import React from 'react';
import { StyleSheet, View } from 'react-native';
import AppTheme from '../AppTheme';
import TaskHeader from '../components/TaskHeader';
import TaskList from '../components/TaskList';
import AddButton from '../components/AddButton';
import Constants from 'expo-constants';
import { useRoute } from '@react-navigation/native';
import TaskNavigation from '../components/TaskNavigation';

const Tasks = () => {
    const route = useRoute();
    const {task} = route.params;
    return (
        <View style={styles.container}>
            <TaskHeader task={task} />
            <TaskNavigation />
            <AddButton />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: AppTheme.LightColors.primary,
        paddingTop: Constants.statusBarHeight
    }
});

export default Tasks;
