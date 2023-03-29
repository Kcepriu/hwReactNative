import React from 'react';
import { Provider } from 'react-redux';

import { View } from 'react-native';
import { useCallback } from 'react';

import { NavigationContainer } from '@react-navigation/native';

import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

import { store } from './redux/store';

import Main from './components/Main';

SplashScreen.preventAutoHideAsync();

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
    <Provider store={store}>
      <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
        <NavigationContainer>
          <Main />
        </NavigationContainer>
      </View>
    </Provider>
  );
}
