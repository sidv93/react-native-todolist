import React from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';
import AppTheme from '../AppTheme';
import BackButton from '../assets/icons/back.png';
import OptionsButton from '../assets/icons/options.png';
import sample from '../assets/icons/art.png';
import { useNavigation } from '@react-navigation/native';

const TaskHeader = ({ task }) => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={styles.optionsContainer}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image source={BackButton} style={styles.back} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source={OptionsButton} style={styles.options} />
                </TouchableOpacity>
            </View>
            <View style={styles.contentContainer}>
                <View style={styles.iconContainer}>
                    <Image source={sample} style={styles.taskIcon} />
                </View>
                <Text style={styles.taskHeader}>{'All'}</Text>
                <Text style={styles.taskText}>{'23 tasks'}</Text>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: AppTheme.LightColors.primary,
        paddingVertical: 20,
        paddingHorizontal: 15,
        justifyContent: 'space-between'
    },
    optionsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    back: {
        width: 30,
        height: 25,
        resizeMode: 'contain'
    },
    options: {
        width: 30,
        height: 25,
        resizeMode: 'contain'
    },
    contentContainer: {
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        paddingHorizontal: 20
    },
    iconContainer: {
        width: 50,
        height: 50,
        backgroundColor: 'white',
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 20
    },

    taskIcon: {
        width: 34,
        height: 34,
        resizeMode: 'contain',
        borderRadius: 50
    },
    taskHeader: {
        color: 'white',
        fontSize: 36,
        fontWeight: 'bold'
    },
    taskText: {
        color: 'white',
        fontSize: 18,
        fontWeight: '100'
    }
});

export default TaskHeader;
