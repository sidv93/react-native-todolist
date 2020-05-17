import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Constants from 'expo-constants';
import AppTheme from './AppTheme';
import Home from './screens/Home';
import Tasks from './screens/Tasks';
import NewTask from './screens/NewTask';
import { MenuProvider } from 'react-native-popup-menu';
import TaskStore from './store/tasks';
import ErrorBoundary from 'react-native-error-boundary';
import 'mobx-react-lite/batchingForReactNative';

const Stack = createStackNavigator();

export default function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    TaskStore.loadTasks()
      .then(() => {
        console.log('Done loading tasks');
        setLoading(false);
      });
  });

  if (loading) {
    return (
      <View style={styles.container}>
        <Text style={{ fontSize: 18 }}>Loading</Text>
      </View>
    )
  } else {
    return (
      <ErrorBoundary FallbackComponent={CustomFallback}>
        <MenuProvider>
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
        </MenuProvider>
      </ErrorBoundary>
    )
  }
}

const CustomFallback = ({ error, resetError }) => (
  <View>
    <Text>Something happened!</Text>
    <Text>{error.toString()}</Text>
    <Button onPress={resetError} title={'Try again'} />
  </View>
)

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
