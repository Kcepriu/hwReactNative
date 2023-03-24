import React from 'react';
import { View, Text } from 'react-native';
import { useCallback } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

import LoginScreen from './screens/LoginScreen/LoginScreen';
import RegisterScreen from './screens/RegisterScreen/RegisterScreen';

// import { LogBox } from 'react-native';
// LogBox.ignoreLogs(['Remote debugger']);

SplashScreen.preventAutoHideAsync();

const AuthStack = createStackNavigator(); // вказує на групу навігаторів

export default function App() {
  const [fontsLoaded] = useFonts({
    'Roboto-Bold': require('./assets/fonts/Roboto-Bold.ttf'), //700
    'Roboto-Medium': require('./assets/fonts/Roboto-Medium.ttf'), //500
    'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'), //400
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return <LoginScreen onLayout={onLayoutRootView} />;
}

{
  /* <NavigationContainer>
        <AuthStack.Navigator>
          <AuthStack.Screen name="Login" component={LoginScreen} />

          <AuthStack.Screen name="Register" component={RegisterScreen} />
        </AuthStack.Navigator>
      </NavigationContainer> */
}
