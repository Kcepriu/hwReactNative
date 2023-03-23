import { useEffect, useState } from 'react';

import {
  Text,
  View,
  TouchableOpacity,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Dimensions,
} from 'react-native';

import { styles } from './LoginScreen.styles';
import InputText from '../../compontnts/InputText/InputText';

const initialStateForm = {
  email: '',
  password: '',
};

const LoginScreen = ({ isShowKeyboard, setIsShowKeyboard, keyboardHide }) => {
  const [stateForm, setStateForm] = useState(initialStateForm);
  const [showPassword, setShowPassword] = useState(false);

  const [dimensions, setDimensions] = useState(
    Dimensions.get('window').width - 16 * 2
  );

  useEffect(() => {
    const onChange = ({ window }) => {
      setDimensions(window.width - 16 * 2);
    };

    const subscription = Dimensions.addEventListener('change', onChange);

    return () => subscription?.remove();
  }, []);

  useEffect(() => {
    //якщо тикнути на кнопку ВВОД на клавіатурі, вона ховалась, але прога не знала, що вона сховалася
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setIsShowKeyboard(false);
      }
    );

    return () => keyboardDidHideListener?.remove();
  }, []);

  const handlerLogIn = () => {
    keyboardHide();
    console.log(stateForm);
    setStateForm(initialStateForm);
  };

  const handlerNotAccount = () => {
    console.log('To register');
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'heoght'}
    >
      <View
        style={{
          ...styles.containerMainLogin,
          marginBottom: isShowKeyboard ? -250 : 0,
        }}
      >
        <View
          style={{
            ...styles.containerLogIn,
            width: dimensions,
          }}
        >
          <View style={styles.headerLogin}>
            <Text style={styles.headerLoginTitle}>Войти</Text>
          </View>

          <View>
            {/* <Text style={styles.titleLogin}>EMAIL ADDRESS</Text> */}
            <InputText
              textAlign="left"
              value={stateForm.email}
              placeholder="Адрес электронной почты"
              placeholderTextColor="#BDBDBD"
              inputmode="email"
              textContentType="emailAddress"
              keyboardType="email-address"
              onFocusOther={() => {
                setIsShowKeyboard(true);
              }}
              onChangeText={value =>
                setStateForm(prev => ({ ...prev, email: value }))
              }
            />
          </View>

          <View
            style={{
              marginTop: 20,
            }}
          >
            <InputText
              textAlign="left"
              value={stateForm.password}
              paddingRight={95}
              placeholder="Пароль"
              placeholderTextColor="#BDBDBD"
              secureTextEntry={!showPassword}
              onFocusOther={() => {
                setIsShowKeyboard(true);
              }}
              onChangeText={value =>
                setStateForm(prev => ({ ...prev, password: value }))
              }
            />
            <TouchableOpacity
              style={styles.btnShowPassword}
              activeOpacity={0.8}
              onPress={() => setShowPassword(prev => !prev)}
            >
              <Text style={styles.textShowPassword}>Показать</Text>
            </TouchableOpacity>
          </View>
        </View>

        {
          <View style={{ ...styles.containerButtons, width: dimensions }}>
            <TouchableOpacity
              style={styles.btnLogIn}
              activeOpacity={0.8}
              onPress={handlerLogIn}
            >
              <Text style={styles.btnTitle}>Войти</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.btnNotAccount}
              activeOpacity={0.8}
              onPress={handlerNotAccount}
            >
              <Text style={styles.textNoAccount}>
                Нет аккаунта? Зарегистрироваться
              </Text>
            </TouchableOpacity>
          </View>
        }
      </View>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;
