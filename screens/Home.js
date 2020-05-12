import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import AppTheme from '../AppTheme';
import CardList from '../components/CardList';
import AddButton from '../components/AddButton';
import sampleData from '../sampleData';
import Constants from 'expo-constants'; 

const Home = () => {
    return (
        <SafeAreaView style={styles.container}>
            <CardList cards={sampleData.categories} />
            <AddButton />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: AppTheme.LightColors.secondary,
        marginTop: Constants.statusBarHeight
    }
})

export default Home;
