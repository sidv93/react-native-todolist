import React from 'react';
import { StyleSheet, FlatList, SafeAreaView } from 'react-native';
import AppTheme from '../AppTheme';
import Card from './Card';

const CardList = ({ cards }) => {
    return (
        <SafeAreaView style={styles.container}>
            <FlatList numColumns={2}
                keyExtractor={(item, index) => String(index)} removeClippedSubviews={true} data={cards}
                renderItem={({ item }) => <Card card={item} />} />
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 4,
        backgroundColor: AppTheme.LightColors.secondary
    }
});

export default CardList;
