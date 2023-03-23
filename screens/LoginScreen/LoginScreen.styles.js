import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  containerMainLogin: {
    // width: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
  },

  containerLogIn: {
    marginTop: 32,

    // marginBottom: 43,
    // marginBottom: 120,

    // width: '100%',
    // marginHorizontal: 40,
  },

  headerLogin: {
    alignItems: 'center',
    marginBottom: 50,
  },

  headerLoginTitle: {
    fontSize: 30,
    color: '#212121',
    fontFamily: 'Roboto-Regular',
    lineHeight: 35,
    letterSpacing: 0.01,
  },

  // titleLogin: {
  //   color: '#f0f8ff',
  //   marginBottom: 10,
  //   fontSize: 18,
  // },

  inputLogin: {
    borderWidth: 1,
    borderColor: '#E8E8E8',
    backgroundColor: '#F6F6F6',
    color: '#212121',

    height: 50,
    borderRadius: 8,
    padding: 16,

    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    lineHeight: 19,
  },

  containerButtons: {
    //backgroundColor: 'green',
  },

  btnLogIn: {
    height: 51,
    borderRadius: 100,
    borderWidth: 1,

    marginTop: 45,
    justifyContent: 'center',
    alignItems: 'center',
    // marginHorizontal: 20,
    ...Platform.select({
      ios: {
        backgroundColor: 'transparent',
        borderColor: '#f0f8ff',
      },
      android: {
        backgroundColor: '#FF6C00',
        borderColor: 'transparent',
      },
    }),
  },

  btnTitle: {
    color: '#FFFFFF',
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    lineHeight: 19,
  },

  btnNotAccount: {
    marginTop: 16,
    marginBottom: 144,
    alignItems: 'center',
  },

  textNoAccount: {
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    lineHeight: 19,
    color: '#1B4371',
  },

  btnShowPassword: {
    position: 'absolute',
    right: 16,
    top: 16,
  },

  textShowPassword: {
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    lineHeight: 19,
    color: '#1B4371',
  },
});
