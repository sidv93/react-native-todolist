import React from 'react';
import { StyleSheet } from 'react-native';
import AppTheme from '../AppTheme';
import HomeHeader from '../components/HomeHeader';
import CardList from '../components/CardList';
import AddButton from '../components/AddButton';

const Home = () => {
    return (
        <View style={styles.container}>
            <HomeHeader />
            <CardList cards={[]} />
            <View style={styles.addButtonContainer}>
                <AddButton />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: AppTheme.LightColors.secondary
    },
    addButtonContainer: {
        
    }
})

export default Home;
