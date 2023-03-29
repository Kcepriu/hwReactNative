import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  containerEditPublication: {
    flex: 1,
    width: '100%',
    paddingTop: 32,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 0,
    backgroundColor: '#FFF',
    justifyContent: 'space-between',
  },

  containerPhoto: {},
  photo: {
    width: '100%',
    height: 240,
    backgroundColor: '#F6F6F6',
    borderWidth: 1,
    borderColor: '#E8E8E8',
    borderRadius: 8,
  },

  textUnderPhoto: {
    marginTop: 8,

    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    lineHeight: 19,
    color: '#BDBDBD',
  },

  camera: {
    width: '100%',
    height: 240,
    backgroundColor: 'red',
  },

  alreadyPhoto: {
    // position: 'absolute',
    width: '100%',
    height: 240,
  },

  btnCamera: {
    position: 'absolute',
    top: '50%',
    left: '50%',
  },

  containerCamera: {
    transform: [{ translateX: -60 / 2 }, { translateY: -60 / 2 }],
    width: 60,
    height: 60,

    margin: 'auto',
    justifyContent: 'center',
    alignItems: 'center',

    backgroundColor: '#FFF',
    borderRadius: 60,
  },

  btnPublication: {
    height: 51,
    borderRadius: 100,
    borderWidth: 1,

    marginTop: 32,
    justifyContent: 'center',
    alignItems: 'center',
    // marginHorizontal: 20,

    backgroundColor: '#FF6C00',
    borderColor: 'transparent',
  },

  btnTitle: {
    color: '#FFFFFF',
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    lineHeight: 19,
  },

  input: {
    height: 50,
    marginTop: 32,
    paddingTop: 16,
    paddingBottom: 16,

    fontFamily: 'Roboto-Medium',
    // fontWeight: 500,
    fontSize: 16,
    lineHeight: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E8E8E8',

    color: '#212121',
  },

  inputLocation: {
    paddingLeft: 28,
    fontFamily: 'Roboto-Regular',

    // fontWeight: 400,
  },

  iconLocation: {
    borderWidth: 1,
    borderColor: 'red',
    position: 'absolute',
    bottom: 13,
    left: 0,
  },

  tabBarDelete: {
    height: 83,
    paddingTop: 9,

    flexDirection: 'row',
    gap: 31,

    justifyContent: 'center',

    backgroundColor: '#FFF',
  },
  buttonDelete: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 70,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#F6F6F6',
  },
});
