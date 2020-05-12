import React from 'react';
import { StyleSheet, SectionList, SafeAreaView } from 'react-native';
import AppTheme from '../AppTheme';
import Task from './Task';

const TaskList = ({ tasks }) => {
    return (
        <SafeAreaView style={styles.container}>
            <SectionList
                sections={DATA}
                keyExtractor={(item, index) => String(index)}
                renderItem={({ item }) => <Task task={item} />}
                renderSectionHeader={({ section: { title } }) => (
                    <Text style={styles.header}>{title}</Text>
                )}
            />
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: AppTheme.LightColors.secondary
    }
});

export default TaskList;
