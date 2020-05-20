import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import AppTheme from '../AppTheme';
import { observer } from 'mobx-react';

const DeleteTask = ({ task }) => {
    const onToggle = () => {
        task.toggleCompleted();
    }
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Done</Text>
            <CheckBox
                value={task.completed}
                onValueChange={onToggle}
                tintColors={{ true: AppTheme.LightColors.primary, false: AppTheme.LightColors.primary }}
                style={styles.checkbox}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingVertical: 10,
        paddingHorizontal: 20,
        flex: 1,
        alignItems: 'center'
    },
    text: {
        flex: 4,
        fontSize: 22,
        color: AppTheme.TextColors.taskTimeColor
    },
    checkbox: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default observer(DeleteTask);
