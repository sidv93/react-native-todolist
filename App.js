import React from 'react';
import { StyleSheet } from 'react-native';
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
      <Stack.Navigator headerMode={'none'} initialRouteName={"Home"} mode={'modal'}>
        <Stack.Screen name="Home" component={Home} options={{
          transitionSpec: {
            open: config,
            close: config,
          },
        }} />
        <Stack.Screen name="Tasks" component={Tasks} options={{
          transitionSpec: {
            open: config,
            close: config,
          },
        }} />
        <Stack.Screen name="NewTask" component={NewTask} options={{
          transitionSpec: {
            open: config,
            close: config,
          },
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const config = {
  animation: 'spring',
  config: {
    stiffness: 5000,
    damping: 100,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppTheme.LightColors.secondary,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: Constants.statusBarHeight
  },
});
