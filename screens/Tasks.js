import React from 'react';
import { StyleSheet, View } from 'react-native';
import AppTheme from '../AppTheme';
import TaskHeader from '../components/TaskHeader';
import TaskList from '../components/TaskList';
import AddButton from '../components/AddButton';

const Tasks = ({ category }) => {
    return (
        <View style={styles.container}>
            <TaskHeader />
            <TaskList tasks={[]} />
            <AddButton />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: AppTheme.LightColors.primary
    }
});

export default Tasks;
