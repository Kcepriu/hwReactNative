import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },

  containerMainLogin: {
    width: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    paddingLeft: 16,
    paddingRight: 16,
  },

  containerAvatar: {
    position: 'absolute',
    top: -60,

    backgroundColor: '#F6F6F6',

    width: 120,
    height: 120,
    borderRadius: 16,
  },

  titleName: {
    marginTop: 90,
    marginBottom: 32,
    fontFamily: 'Roboto-Medium',
    fontSize: 30,
    lineHeight: 35,
    letterSpacing: 0.01,
    color: '#212121',
  },

  btnLogOut: {
    position: 'absolute',
    top: 22,
    right: 16,
  },

  scroolContainer: {
    // flex: 1,
    width: '100%',
    // alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor: 'transparent',
  },
});
