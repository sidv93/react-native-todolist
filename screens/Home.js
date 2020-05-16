import React from 'react';
import { StyleSheet, SafeAreaView, AsyncStorage } from 'react-native';
import AppTheme from '../AppTheme';
import CardList from '../components/CardList';
import AddButton from '../components/AddButton';
import Constants from 'expo-constants';

const Home = () => {
    return (
        <SafeAreaView style={styles.container}>
            <CardList cards={[]} />
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

export default Home;
