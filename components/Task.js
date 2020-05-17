import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import AppTheme from '../AppTheme';

const Task = ({ task }) => {
    const [toggleCheckBox, setToggleCheckBox] = useState(false)
    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={styles.taskName}>{task.title}</Text>
                <Text style={styles.taskDate}>{task.timestamp.getMonth()}</Text>
            </View>
            <CheckBox
                value={toggleCheckBox}
                onValueChange={() => toggleCheckBox ? setToggleCheckBox(false) : setToggleCheckBox(true)}
                tintColors={{true: AppTheme.TextColors.sectionColor, false: AppTheme.TextColors.sectionColor}}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        paddingVertical: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    textContainer: {

    },
    taskName: {
        textTransform: 'capitalize',
        fontSize: 22,
        fontWeight: '400'
    },
    taskDate: {
        fontSize: 18
    }
});

export default Task;
