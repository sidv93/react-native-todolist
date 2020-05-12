import React from 'react';
import { StyleSheet, FlatList, SafeAreaView } from 'react-native';
import AppTheme from '../AppTheme';
import Card from './Card';
import HomeHeader from './HomeHeader';

const CardList = ({ cards }) => {
    console.log('cards', cards.length);
    return (
        <SafeAreaView style={styles.container}>
            <FlatList numColumns={2} ListHeaderComponent={HomeHeader}
                keyExtractor={(item, index) => String(index)} removeClippedSubviews={true} data={cards}
                renderItem={({ item }) => <Card card={item} />} />
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: AppTheme.LightColors.secondary,
        paddingHorizontal: 10,
        marginVertical: 10
    }
});

export default CardList;
