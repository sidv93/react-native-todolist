import React, { useEffect } from 'react';
import { StyleSheet, SafeAreaView, Text } from 'react-native';
import AppTheme from '../AppTheme';
import CardList from '../components/CardList';
import AddButton from '../components/AddButton';
import Constants from 'expo-constants';
import TaskStore from '../store/tasks';
import { observer } from 'mobx-react';

const Home = () => {
    const { tasks } = TaskStore;
    return (
        <SafeAreaView style={styles.container}>
            <CardList cards={tasks} />
            <AddButton />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: AppTheme.LightColors.secondary,
        paddingTop: Constants.statusBarHeight,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default observer(Home);
