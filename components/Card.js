import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import AppTheme from '../AppTheme';
import { useNavigation } from '@react-navigation/native';
import { observer } from 'mobx-react';

const Card = ({ card, tasks }) => {
    const navigation = useNavigation();
    return (
        <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('Tasks', { task: card })}>
            <View style={styles.cardHeader}>
                <Image source={card.icon} style={styles.cardIcon} />
            </View>
            <View style={styles.cardContent}>
                <Text style={styles.cardName}>{card.tag}</Text>
                <Text style={styles.cardText}>{
                    `${card.tag === 'all' ? tasks.length : tasks.filter(item => item.tag === card.tag).length} tasks`
                }</Text>
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
        elevation: 5,
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
        fontSize: 28,
        textTransform: 'capitalize'
    },
    cardText: {
        color: AppTheme.TextColors.taskTimeColor
    }
});

export default observer(Card);
