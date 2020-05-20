import React from 'react';
import { StyleSheet, View } from 'react-native';
import AppTheme from '../AppTheme';
import TaskHeader from '../components/TaskHeader';
import AddButton from '../components/AddButton';
import Constants from 'expo-constants';
import { useRoute } from '@react-navigation/native';
import TaskNavigation from '../components/TaskNavigation';
import { observer } from 'mobx-react';

const Tasks = () => {
    const route = useRoute();
    const {task} = route.params;
    return (
        <View style={styles.container}>
            <TaskHeader task={task} />
            <TaskNavigation  tag={task} />
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

export default observer(Tasks);
