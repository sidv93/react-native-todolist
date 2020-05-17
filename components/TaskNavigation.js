import React from 'react';
import { StyleSheet, View } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import AppTheme from '../AppTheme';
import TaskList from './TaskList';

const Tab = createMaterialTopTabNavigator();

const TaskNavigation = () => {
    return (
        <View style={styles.container}>
            <Tab.Navigator style={styles.navigator} tabBarOptions={{
                activeTintColor: AppTheme.LightColors.primary,
                indicatorStyle: styles.indicator,
                labelStyle: styles.label,
                style: styles.topBar
            }}>
                <Tab.Screen name="Elapsed" children={() => <TaskList tasks={[]} />} />
                <Tab.Screen name="Today" children={() => <TaskList tasks={[]} />} />
                <Tab.Screen name="Upcoming" children={() => <TaskList tasks={[]} />} />
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

export default TaskNavigation;
