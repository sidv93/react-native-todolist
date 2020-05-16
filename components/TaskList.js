import React, { useEffect, useState } from 'react';
import { StyleSheet, SectionList, SafeAreaView, Text } from 'react-native';
import AppTheme from '../AppTheme';
import Task from './Task';

const TaskList = ({ tasks }) => {
    const [taskList, setTasks] = useState([]);
    useEffect(() => {
        const sectionTasks = [
            {
                title: 'late',
                data: tasks.filter(item => {
                    const current = new Date();
                    const taskTime = new Date(item.dateTime);
                    
                })
            }
        ]
    }, [tasks]);
    return (
        <SafeAreaView style={styles.container}>
            <SectionList
                sections={tasks}
                showsVerticalScrollIndicator={false}
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
        flex: 2,
        backgroundColor: AppTheme.LightColors.secondary,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 20,
        paddingHorizontal: 30
    },
    header: {
        color: AppTheme.TextColors.sectionColor,
        fontSize: 18,
        marginVertical: 10,
        textTransform: 'capitalize'
    }
});

export default TaskList;
