import React from 'react';
import { StyleSheet, FlatList, SafeAreaView } from 'react-native';
import AppTheme from '../AppTheme';
import Task from './Task';

const TaskList = ({ tasks }) => {
    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                keyExtractor={(item, index) => String(index)} removeClippedSubviews={true} data={tasks}
                renderItem={({ item }) => <Task task={item} />} />
        </SafeAreaView>
    )
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

export default TaskList;
