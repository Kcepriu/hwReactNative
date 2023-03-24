import { useEffect, useState } from 'react';

import {
  Text,
  View,
  TouchableOpacity,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Dimensions,
  TouchableWithoutFeedback,
} from 'react-native';
import InputText from '../../components/InputText/InputText';
import BtnAvatar from '../../components/BtnAvatar/BtnAvatar';
import { styles } from './RegisterScreen.styles';
import MainLayouts from '../../layouts/MainLayout';

const initialStateForm = {
  login: '',
  email: '',
  password: '',
};

const RegisterScreen = ({ navigation, route }) => {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [stateForm, setStateForm] = useState(initialStateForm);
  const [showPassword, setShowPassword] = useState(false);

  const [dimensions, setDimensions] = useState(
    Dimensions.get('window').width - 16 * 2
  );

  useEffect(() => {
    const onChange = ({ window }) => {
      setDimensions(window.width - 16 * 2);
    };

    const onChangeListener = Dimensions.addEventListener('change', onChange);

    //якщо тикнути на кнопку ВВОД на клавіатурі, вона ховалась, але прога не знала, що вона сховалася
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setIsShowKeyboard(false);
      }
    );

    return () => {
      onChangeListener?.remove();
      keyboardDidHideListener?.remove();
    };
  }, []);

  useEffect(() => {
    if (!route?.params) return;
    const { email = '', password = '' } = route?.params;

    setStateForm({ email, password });
  }, [route]);

  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
  };

  const handlerLogIn = () => {
    keyboardHide();

    console.log(stateForm);

    //setStateForm(initialStateForm);
    navigation.navigate('HomeScreen');
  };

  const handlerNotAccount = () => {
    navigation.navigate('Login', stateForm);
  };

  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <MainLayouts>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'heoght'}
        >
          <View
            style={{
              ...styles.containerMainLogin,
              marginBottom: isShowKeyboard ? -150 : 0,
            }}
          >
            <View style={styles.containerAvatar}>
              {/* <Image
              style={styles.avatar}
              width={120}
              height={120}
              // source={require('@expo/snack-static/react-native-logo.png')}
            /> */}

              <BtnAvatar />
            </View>

            <View
              style={{
                ...styles.containerLogIn,
                width: dimensions,
              }}
            >
              <View style={styles.headerLogin}>
                <Text style={styles.headerLoginTitle}>Регистрация</Text>
              </View>

              <View>
                <InputText
                  textAlign="left"
                  value={stateForm.login}
                  placeholder="Логин"
                  placeholderTextColor="#BDBDBD"
                  // inputmode="email"
                  // textContentType="emailAddress"
                  // keyboardType="email-address"
                  onFocusOther={() => {
                    setIsShowKeyboard(true);
                  }}
                  onChangeText={value =>
                    setStateForm(prev => ({ ...prev, login: value }))
                  }
                />
              </View>

              <View
                style={{
                  marginTop: 16,
                }}
              >
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
                  marginTop: 16,
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
                  <Text style={styles.btnTitle}>Зарегистрироваться</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.btnNotAccount}
                  activeOpacity={0.8}
                  onPress={handlerNotAccount}
                >
                  <Text style={styles.textNoAccount}>
                    Уже есть аккаунт? Войти
                  </Text>
                </TouchableOpacity>
              </View>
            }
          </View>
        </KeyboardAvoidingView>
      </MainLayouts>
    </TouchableWithoutFeedback>
  );
};

export default RegisterScreen;
