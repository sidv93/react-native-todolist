import React from 'react';
import { StyleSheet, View } from 'react-native';
import AppTheme from '../AppTheme';
import TaskHeader from '../components/TaskHeader';
import TaskList from '../components/TaskList';
import AddButton from '../components/AddButton';
import Constants from 'expo-constants';
import { MenuProvider } from 'react-native-popup-menu';

import sampledata from '../sampleData';

const tasks = [
    {
        title: 'work',
        data: [
            {
                category: 'work',
                title: 'Finish login screen',
                timestamp: '1589291281',
                done: false,
            },
            {
                category: 'work',
                title: 'Finish login screen',
                timestamp: '1589291281',
                done: false,
            },
            {
                category: 'work',
                title: 'Finish login screen',
                timestamp: '1589291281',
                done: false,
            },
            {
                category: 'work',
                title: 'Finish login screen',
                timestamp: '1589291281',
                done: false,
            },
            {
                category: 'work',
                title: 'Finish login screen',
                timestamp: '1589291281',
                done: false,
            },
            {
                category: 'work',
                title: 'Finish login screen',
                timestamp: '1589291281',
                done: false,
            },
            {
                category: 'work',
                title: 'Finish login screen',
                timestamp: '1589291281',
                done: false,
            },
            {
                category: 'work',
                title: 'Finish login screen',
                timestamp: '1589291281',
                done: false,
            },
            {
                category: 'work',
                title: 'Finish login screen',
                timestamp: '1589291281',
                done: false,
            },
            {
                category: 'work',
                title: 'Finish login screen',
                timestamp: '1589291281',
                done: false,
            },
            {
                category: 'work',
                title: 'Finish login screen',
                timestamp: '1589291281',
                done: false,
            },
            {
                category: 'work',
                title: 'Finish login screen',
                timestamp: '1589291281',
                done: false,
            },
        ]
    }
]

const Tasks = ({ category }) => {
    return (
        <MenuProvider>
            <View style={styles.container}>
                <TaskHeader />
                <TaskList tasks={tasks} />
                <AddButton />
            </View>
        </MenuProvider>
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
