import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import AppTheme from '../AppTheme';
import BackButton from '../assets/icons/back.png';
import OptionsButton from '../assets/icons/options.png';

const TaskHeader = ({task}) => {
    return (
        <View style={styles.container}>
            <View style={styles.optionsContainer}>
                <Image source={BackButton} style={styles.back} />
                <Image source={OptionsButton} style={styles.options} />
            </View>
            <View style={style.contentContainer}>
                <Image source={task.icon} style={styles.taskIcon} />
                <Text style={styles.taskHeader}>{task.name}</Text>
                <Text style={styles.taskText}>{task.text}</Text>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'inherit'
    },
    optionsContainer: {

    },
    back: {

    },
    options: {

    },
    contentContainer: {

    },
    taskIcon: {

    },
    taskHeader: {

    },
    taskText: {

    }
});

export default TaskHeader;
