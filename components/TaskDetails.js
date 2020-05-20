import React, { useState } from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import Reminder from '../assets/icons/reminder.png';
import Category from '../assets/icons/category.png';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Menu, MenuOptions, MenuOption, MenuTrigger} from 'react-native-popup-menu';    
import AppTheme from '../AppTheme';
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const tags = ['home', 'work', 'travel', 'study', 'shopping', 'music'];

const TaskDetails = ({onDateTimeChange, onTagChange, edit, task}) => {
    const [mode, setMode] = useState('date');
    const [showPicker, togglePicker] = useState(false);
    const [date, setDate] = useState((task && task.timestamp) || new Date());
    const [tag, setTag] = useState((task && task.tag) || 'Select Tag');
    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        togglePicker(Platform.OS === 'ios');
        setDate(currentDate);
        onDateTimeChange(currentDate);
    };
    const tagChange = (tag) => {
        setTag(tag);
        onTagChange(tag);
    }
    const showMode = currentMode => {
        togglePicker(true);
        setMode(currentMode);
    };

    const showDatepicker = () => {
        showMode('date');
    };

    const showTimepicker = () => {
        showMode('time');
    };
    return (
        <KeyboardAvoidingView style={styles.container} behavior={'height'}>
            <View style={styles.row}>
                <FontAwesome name="bell-o" size={22} color={AppTheme.TextColors.taskTimeColor} />
                <TouchableOpacity onPress={showDatepicker}>
                    <Text style={styles.text}>{`${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={showTimepicker}>
                    <Text style={styles.text}>{`${date.getHours()}:${date.getMinutes()}`}</Text>
                </TouchableOpacity>
                {showPicker && (
                    <DateTimePicker
                        timeZoneOffsetInMinutes={0}
                        value={date}
                        mode={mode}
                        is24Hour={true}
                        display={'spinner'}
                        onChange={onChange}
                        minimumDate={new Date()}
                    />
                )}
            </View>
            <View style={styles.row}>
            <AntDesign name="tago" size={28} color={AppTheme.TextColors.taskTimeColor} />
            <TouchableOpacity>
                    <>
                        <Menu>
                            <MenuTrigger>
                                <Text style={styles.text}>{tag}</Text>
                            </MenuTrigger>
                            <MenuOptions>
                                {
                                    tags.map(
                                        tag => <MenuOption key={tag} onSelect={() => tagChange(tag)}>
                                            <Text style={styles.tag}>{tag}</Text>
                                        </MenuOption>
                                    )
                                }
                            </MenuOptions>
                        </Menu>
                    </>
                </TouchableOpacity>
                
            </View>
        </KeyboardAvoidingView>
    )

};

const styles = StyleSheet.create({
    container: {
        marginVertical: 20,
        marginHorizontal: 20,
        flex: 1,
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
        marginHorizontal: 30,
        textTransform: 'capitalize',
        color: AppTheme.TextColors.taskTimeColor
    },
    tag: {
        fontSize: 18,
        color: AppTheme.TextColors.taskTimeColor,
        padding: 10,
        textTransform: 'capitalize'
    }
});

export default TaskDetails;
