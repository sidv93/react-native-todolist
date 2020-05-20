import React, { useState, useEffect, Component } from 'react';
import { StyleSheet, Text, View, Button, AsyncStorage, AppState } from 'react-native';
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
import Spinner from './components/Spinner';
import EditTask from './screens/EditTask';

const Stack = createStackNavigator();

export default class App extends Component {
  state = {
    loading: true,
  }
  componentDidMount() {
    AppState.addEventListener('change', this._handleAppStateChange);
    TaskStore.loadTasks().then(_ => {
      this.setState({ loading: false });
    })
  }

  componentWillUnmount() {
    AppState.removeEventListener('change', this._handleAppStateChange);
  }

  _handleAppStateChange = (nextAppState) => {
    if(nextAppState === 'background') {
      TaskStore.saveTasks().then(_ => console.log('tasks saved'));
    }
  }

  render() {
    if (this.state.loading) {
      return <Spinner />
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
                <Stack.Screen name="EditTask" component={EditTask} options={{
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
}

// export default class AppStateExample extends Component {

//   state = {
//     appState: AppState.currentState
//   }

//   componentDidMount() {
//     AppState.addEventListener('change', this._handleAppStateChange);
//   }

//   componentWillUnmount() {
//     AppState.removeEventListener('change', this._handleAppStateChange);
//   }

//   _handleAppStateChange = (nextAppState) => {
//     console.log('next app state', nextAppState);
//     if (this.state.appState.match(/inactive|background/) && nextAppState === 'active') {
//       console.log('App has come to the foreground!')
//     }
//     this.setState({appState: nextAppState});
//   }

//   render() {
//     return (
//       <Text>Current state is: {this.state.appState}</Text>
//     );
//   }

// }
const CustomFallback = ({ error, resetError }) => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
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
