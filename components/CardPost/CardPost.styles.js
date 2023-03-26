import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  containerPhoto: {
    width: '100%',
  },
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
    fontFamily: 'Roboto-Medium',
    fontSize: 16,
    lineHeight: 19,
    color: '#212121',
  },
  containerUnderPhoto: {
    marginTop: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  containerSocials: {
    flexDirection: 'row',
  },
  containerLocation: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  containerMessages: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  containerLikes: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 24,
  },

  textCount: {
    marginLeft: 6,
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    lineHeight: 19,
    color: '#212121',
  },

  textLocation: {
    marginLeft: 4,
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    lineHeight: 19,
    color: '#212121',
  },
});
