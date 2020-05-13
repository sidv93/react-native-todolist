import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import Reminder from '../assets/icons/reminder.png';
import Category from '../assets/icons/category.png';

const TaskDetails = () => {
    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <Image source={Reminder} style={styles.icon} />
                <Text style={styles.text}>May 29, 14:00</Text>
            </View>
            <View style={styles.row}>
                <Image source={Category} style={styles.icon} />
                <Text style={styles.text}>Category</Text>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        marginVertical: 30,
        flex: 1
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginVertical: 10
    },
    icon: {
        height: 30,
        width: 30,
        resizeMode: 'contain'
    },
    text: {
        marginHorizontal: 30
    }
});

export default TaskDetails;
