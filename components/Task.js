import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import AppTheme from '../AppTheme';
import { observer } from 'mobx-react';
import { MaterialIcons } from '@expo/vector-icons';
import TaskStore from '../store/tasks';
import { useNavigation } from '@react-navigation/native';

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const Task = ({ task, type }) => {
    const navigation = useNavigation();
    const onToggle = () => {
        task.toggleCompleted();
    }
    const deleteTask = () => {
        TaskStore.removeTask(task);
    }
    return (
        <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('EditTask', {taskId: task.id})}>
            <View style={styles.textContainer}>
                <Text style={styles.taskName}>{task.title}</Text>
                <Text style={[styles.taskDate, { color: type === 'elapsed' ? AppTheme.TextColors.taskLateColor : AppTheme.TextColors.taskTimeColor }]}>
                    {
                        type === 'today' ?
                            `${task.timestamp.getHours()}:${task.timestamp.getMinutes()}` :
                            `${task.timestamp.getHours()}:${task.timestamp.getMinutes()} ${months[task.timestamp.getMonth()]} ${task.timestamp.getDate()}`
                    }
                </Text>
            </View>
            <CheckBox
                value={task.completed}
                onValueChange={onToggle}
                tintColors={{ true: AppTheme.LightColors.primary, false: AppTheme.LightColors.primary }}
                style={styles.checkbox}
            />
            <MaterialIcons name="delete" size={29} color={AppTheme.LightColors.primary}
                onPress={deleteTask}
                style={styles.deleteIcon} />
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    container: {
        paddingVertical: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    textContainer: {
        flex: 6
    },
    taskName: {
        textTransform: 'capitalize',
        fontSize: 22,
        fontWeight: '400'
    },
    taskDate: {
        fontSize: 16,
    },
    deleteIcon: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    checkbox: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default observer(Task);
