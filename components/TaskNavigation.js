import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import AppTheme from '../AppTheme';

const Tab = createMaterialTopTabNavigator();

const TaskNavigation = () => {
    return (
        <View style={styles.container}>
            <Tab.Navigator style={{ paddingTop: 35 }} tabBarOptions={{
                activeTintColor: AppTheme.LightColors.primary,
                indicatorStyle: {
                    backgroundColor: AppTheme.LightColors.primary
                },
                labelStyle: {
                    textTransform: 'capitalize',
                    fontSize: 16
                },
                style: {
                    elevation: 0
                }
            }}>
                <Tab.Screen name="Recent" children={() => <Text> Hello</Text>} />
                <Tab.Screen name="Old" children={() =>  <Text> Hello</Text>} />
                <Tab.Screen name="Favourites" children={() =>  <Text> Hello</Text>} />
            </Tab.Navigator>
        </View>
    )

};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 4,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        marginTop: 15
    }
});

export default TaskNavigation;
