import React, { useState } from 'react';
import { StyleSheet, View, Image, Text, Picker, TouchableOpacity } from 'react-native';
import Reminder from '../assets/icons/reminder.png';
import Category from '../assets/icons/category.png';
import DateTimePicker from '@react-native-community/datetimepicker';
import AppTheme from '../AppTheme';

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

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
        setMode(currentMode);
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
                <Picker
                    selectedValue={tag}
                    mode={'dialog'}
                    style={{ height: 50, width: 200, marginHorizontal: 20, backgroundColor: AppTheme.LightColors.secondary }}
                    onValueChange={(itemValue, itemIndex) => { if (itemValue !== 'select') setTag(itemValue) }}
                >
                    <Picker.Item label="Select tag" value="select" />
                    <Picker.Item label="Work" value="work" />
                    <Picker.Item label="Home" value="home" />
                    <Picker.Item label="Travel" value="travel" />
                    <Picker.Item label="Study" value="study" />
                    <Picker.Item label="Shopping" value="shopping" />
                </Picker>
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
