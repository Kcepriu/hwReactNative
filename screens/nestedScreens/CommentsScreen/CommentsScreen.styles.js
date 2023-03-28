import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 32,
    paddingBottom: 16,
    paddingLeft: 16,
    paddingRight: 16,
    backgroundColor: '#FFFFFF',
  },

  containerPhoto: {
    width: '100%',
    height: 240,
    backgroundColor: '#F6F6F6',
    borderWidth: 1,
    borderColor: '#E8E8E8',
    borderRadius: 8,
  },
  photo: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
  },

  wrapperInput: {
    width: '100%',
  },

  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#E8E8E8',
    backgroundColor: '#F6F6F6',
    color: '#212121',

    height: 50,
    borderRadius: 100,
    padding: 16,
    paddingRight: 50,

    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    lineHeight: 19,
  },

  wrapBtnComment: {
    width: 34,
    height: 34,
    borderRadius: '17',
  },

  btnComment: {
    position: 'absolute',
    top: 8,
    right: 8,
    width: 34,
    height: 34,
    borderRadius: 17,

    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FF6C00',
    borderColor: 'transparent',

    // borderRadius: '17',
  },
});
