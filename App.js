import React from 'react';
import { useState, useCallback } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

import {
  View,
  ImageBackground,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';

import LoginScreen from './screens/LoginScreen/LoginScreen';
import RegisterScreen from './screens/RegisterScreen/RegisterScreen';

import { styles } from './App.styles';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);

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

  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <View style={styles.container} onLayout={onLayoutRootView}>
        <ImageBackground
          style={styles.background}
          source={require('./assets/images/background_1x.jpg')}
        >
          {/* <StatusBar style="auto" /> */}
          <LoginScreen
            isShowKeyboard={isShowKeyboard}
            setIsShowKeyboard={setIsShowKeyboard}
            keyboardHide={keyboardHide}
          />

          {/* <RegisterScreen
            isShowKeyboard={isShowKeyboard}
            setIsShowKeyboard={setIsShowKeyboard}
            keyboardHide={keyboardHide}
          /> */}
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
}
