import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Constants from 'expo-constants';
import AppTheme from './AppTheme';
import Home from './screens/Home';
import Tasks from './screens/Tasks';
import NewTask from './screens/NewTask';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <View style={styles.container}>
          <Stack.Screen name="Home" compponent={Home} />
          <Stack.Screen name="Tasks" component={Tasks} />
          <Stack.Screen name="NewTask" component={NewTask} />
        </View>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppTheme.LightColors.secondary,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: Constants.statusBarHeight
  },
});
