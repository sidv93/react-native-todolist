import React, { useState } from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';
import Reminder from '../assets/icons/reminder.png';
import Category from '../assets/icons/category.png';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Menu, MenuOptions, MenuOption, MenuTrigger} from 'react-native-popup-menu';    
import AppTheme from '../AppTheme';

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const tags = ['Home', 'Work', 'Travel', 'Study', 'Shopping'];

const TaskDetails = () => {
    const [mode, setMode] = useState('date');
    const [showPicker, togglePicker] = useState(false);
    const [date, setDate] = useState(new Date());
    const [tag, setTag] = useState('select');
    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        togglePicker(Platform.OS === 'ios');
        setDate(currentDate);
    };
    const showMode = currentMode => {
        togglePicker(true);
        setMode(currentMode);ƒ
    };

    const showDatepicker = () => {
        showMode('date');
    };

    const showTimepicker = () => {
        showMode('time');
    };
    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <Image source={Reminder} style={styles.icon} />
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
                    />
                )}

            </View>
            <View style={styles.row}>
            <Image source={Category} style={styles.icon} />
            <TouchableOpacity>
                    <>
                        <Menu>
                            <MenuTrigger>
                                <Text style={styles.text}>Select Category</Text>
                            </MenuTrigger>
                            <MenuOptions>
                                {
                                    tags.map(
                                        tag => <MenuOption key={tag}>
                                            <Text style={styles.tag}>{tag}</Text>
                                        </MenuOption>
                                    )
                                }
                            </MenuOptions>
                        </Menu>
                    </>
                </TouchableOpacity>
                
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
    },
    tag: {
        fontSize: 18,
        color: AppTheme.TextColors.sectionColor,
        padding: 10
    }
});

export default TaskDetails;
