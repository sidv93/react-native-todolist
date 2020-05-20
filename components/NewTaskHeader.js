import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import CloseIcon from '../assets/icons/close.png';
import { MaterialIcons } from '@expo/vector-icons';
import AppTheme from '../AppTheme';
import TaskStore from '../store/tasks';

const NewTaskHeader = ({ edit, task }) => {
    const navigation = useNavigation();
    const deleteTask = () => {
        TaskStore.removeTask(task);
    }
    const onIconPress = () => {
        if (edit) {
            deleteTask();
        }
        navigation.goBack();
    }
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{edit ? 'Edit Task' : 'New Task'}</Text>
            <TouchableOpacity onPress={onIconPress}>
                {
                    edit ?
                        <MaterialIcons name="delete" size={29} color={AppTheme.TextColors.sectionColor}
                            onPress={deleteTask}
                            style={styles.deleteIcon} /> :
                        <Image source={CloseIcon} style={styles.closeIcon} />
                }
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        flex: 1
    },
    title: {
        fontSize: 24,
        marginRight: 95
    },
    closeIcon: {
        height: 20,
        width: 20,
        resizeMode: 'contain'
    }
});

export default NewTaskHeader;