import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  containerComment: {
    width: '100%',
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    gap: 16,
  },

  containerPhoto: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#F6F6F6',
  },
  containerText: {
    // width: '100%',
    flex: 1,
    padding: 16,
    backgroundColor: 'rgba(0, 0, 0, 0.03)',
    borderRadius: 6,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,

    fontFamily: 'Roboto-Regular',
    fontWeight: 400,
    fontSize: 13,
    lineHeight: 18,
    color: '#212121',
  },

  wrapData: {
    marginTop: 8,
    alignItems: 'flex-end',
  },

  textData: {
    fontFamily: 'Roboto-Regular',
    fontWeight: 400,
    fontSize: 10,
    lineHeight: 12,
    color: '#BDBDBD',
  },
});
