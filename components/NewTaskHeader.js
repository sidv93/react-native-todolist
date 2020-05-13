import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CloseIcon from '../assets/icons/close.png';

const NewTaskHeader = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Text style={styles.title}>New Task</Text>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Image source={CloseIcon} style={styles.closeIcon} />
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