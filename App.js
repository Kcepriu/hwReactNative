import React from 'react';
import { View, Text } from 'react-native';
import { useCallback } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

import LoginScreen from './screens/LoginScreen/LoginScreen';
import RegisterScreen from './screens/RegisterScreen/RegisterScreen';
import HomeScreen from './screens/HomeScreen/HomeScreen';

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

  return (
    <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
      <NavigationContainer>
        <AuthStack.Navigator>
          {/*  Login */}
          <AuthStack.Screen
            options={{ headerShown: false }}
            name="Login"
            component={LoginScreen}
          />
          {/*  Register */}
          <AuthStack.Screen
            options={{ headerShown: false }}
            name="Register"
            component={RegisterScreen}
          />
          {/*  HomeScreen */}
          <AuthStack.Screen
            options={{ headerShown: false }}
            name="HomeScreen"
            component={HomeScreen}
          />
        </AuthStack.Navigator>
      </NavigationContainer>
    </View>
  );
}
