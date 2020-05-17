import React from 'react';
import { StyleSheet, View } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import AppTheme from '../AppTheme';
import TaskList from './TaskList';
import TaskStore from '../store/tasks';
import { observer } from 'mobx-react';

const Tab = createMaterialTopTabNavigator();

const TaskNavigation = ({ tag }) => {

    const elapsed = TaskStore.getElapsedTasksForTag(tag.tag);
    const today = TaskStore.getTodayTasksForTag(tag.tag);
    const upcoming = TaskStore.getUpcomingTasksForTag(tag.tag);
    return (
        <View style={styles.container}>
            <Tab.Navigator style={styles.navigator} tabBarOptions={{
                activeTintColor: AppTheme.LightColors.primary,
                indicatorStyle: styles.indicator,
                labelStyle: styles.label,
                style: styles.topBar
            }}>
                <Tab.Screen name="Elapsed" children={() => <TaskList tasks={elapsed} />} />
                <Tab.Screen name="Today" children={() => <TaskList tasks={today} />} />
                <Tab.Screen name="Upcoming" children={() => <TaskList tasks={upcoming} />} />
            </Tab.Navigator>
        </View>
    )

};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 4,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        marginTop: 15
    },
    navigator: {
        paddingTop: 35
    },
    indicator: {
        backgroundColor: AppTheme.LightColors.primary
    },
    label: {
        textTransform: 'capitalize',
        fontSize: 16
    },
    topBar: {
        elevation: 0
    }
});

export default observer(TaskNavigation);
