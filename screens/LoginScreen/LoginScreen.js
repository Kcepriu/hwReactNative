import { useEffect, useState } from 'react';

import {
  Image,
  Text,
  View,
  TouchableOpacity,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Dimensions,
  TouchableWithoutFeedback,
} from 'react-native';

import { styles } from './LoginScreen.styles';
import InputText from '../../components/InputText/InputText';

const initialStateForm = {
  email: '',
  password: '',
};

const LoginScreen = ({ navigation, route }) => {
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
    console.log('keyboardHide');

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
    navigation.navigate('Register', stateForm);
  };

  return (
    <>
      <Image
        style={{
          flex: 1,
          width: '100%',
          position: 'absolute',
          resizeMode: 'cover',
        }}
        source={require('../../assets/images/background_1x.jpg')}
      />

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'heoght'}
        style={{
          flex: 1,
        }}
      >
        <TouchableWithoutFeedback onPress={keyboardHide}>
          <View
            style={{
              flex: 1,
              justifyContent: 'flex-end',
            }}
          >
            <View
              style={{
                ...styles.containerMainLogin,
                marginBottom: isShowKeyboard ? 0 : 0,
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
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </>
  );
};

export default LoginScreen;
