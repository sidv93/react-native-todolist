import React from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';
import AppTheme from '../AppTheme';

const Spinner = () => {
    return (
        <View style={styles.container}>
            <ActivityIndicator size={'large'} color={AppTheme.LightColors.primary} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default Spinner;
