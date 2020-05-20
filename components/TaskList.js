import React, { useState } from 'react';
import { StyleSheet, FlatList, SafeAreaView, Text } from 'react-native';
import AppTheme from '../AppTheme';
import Task from './Task';
import EmptyTasks from './EmptyTasks';
import { observer } from 'mobx-react';

const TaskList = ({ tasks, type }) => {
    if (tasks.length > 0) {
        return (
            <SafeAreaView style={styles.container}>
                <FlatList keyExtractor={(item, index) => String(index)} removeClippedSubviews={true} 
                showsVerticalScrollIndicator={false} data={tasks} renderItem={({ item }) => <Task type={type} task={item} />} />
            </SafeAreaView>
        )
    }
    return <EmptyTasks />
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: AppTheme.LightColors.secondary,
        paddingVertical: 20,
        paddingHorizontal: 20
    },
    header: {
        color: AppTheme.TextColors.sectionColor,
        fontSize: 18,
        marginVertical: 10,
        textTransform: 'capitalize'
    }
});

export default observer(TaskList);
