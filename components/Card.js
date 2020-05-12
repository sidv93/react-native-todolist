import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import AppTheme from '../AppTheme';

const Card = ({ card }) => {
    <View styles={styles.container}>
        <View style={styles.cardHeader}>
            <Image source={card.icon} style={styles.cardIcon} />
        </View>
        <View style={styles.cardContent}>
            <Text style={styles.cardName}>{card.name}</Text>
            <Text style={styles.cardText}>{card.text}</Text>
        </View>
    </View>
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: AppTheme.LightColors.secondary,
    },
    cardHeader: {

    },
    cardIcon: {

    },
    cardContent: {

    },
    cardName: {

    },
    cardText: {

    }
});

export default Card;
