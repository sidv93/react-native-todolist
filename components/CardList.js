import React, { useEffect } from 'react';
import { StyleSheet, FlatList, SafeAreaView, AsyncStorage } from 'react-native';
import AppTheme from '../AppTheme';
import Card from './Card';
import HomeHeader from './HomeHeader';

const CardList = ({ cards }) => {
    return (
        <SafeAreaView style={styles.container}>
            <FlatList numColumns={2} ListHeaderComponent={HomeHeader} showsVerticalScrollIndicator={false}
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
