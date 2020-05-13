import React from 'react';
import { StyleSheet, Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback, View } from 'react-native';
import AppTheme from '../AppTheme';
import Constants from 'expo-constants';
import CreateButton from '../components/CreateButton';
import NewTaskHeader from '../components/NewTaskHeader';
import AddTask from '../components/AddTask';

const NewTask = () => {
    return (
        <KeyboardAvoidingView style={styles.container} behavior={'height'}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={{flex:1}}>
                    <NewTaskHeader />
                    <AddTask />
                    <CreateButton />
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: AppTheme.LightColors.secondary,
        paddingTop: Constants.statusBarHeight
    }
});

export default NewTask;
