import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import AppTheme from '../AppTheme';

const Card = ({ card }) => {
    return (
        <TouchableOpacity style={styles.container}>
            <View style={styles.cardHeader}>
                <Image source={card.icon} style={styles.cardIcon} />
            </View>
            <View style={styles.cardContent}>
                <Text style={styles.cardName}>{'All'}</Text>
                <Text style={styles.cardText}>{card.text || '23 Tasks'}</Text>
            </View>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: AppTheme.LightColors.secondary,
        flexDirection: 'column',
        minWidth: 150,
        minHeight: 150,
        elevation: 10,
        margin: 10,
        justifyContent: 'space-evenly',
        paddingHorizontal: 20
    },
    cardHeader: {

    },
    cardIcon: {
        width: 30,
        height: 30,
        resizeMode: 'contain'
    },
    cardContent: {

    },
    cardName: {
        fontSize: 28
    },
    cardText: {
        color: AppTheme.TextColors.taskTimeColor
    }
});

export default Card;
