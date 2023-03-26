import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    // alignItems: 'left',

    paddingTop: 32,
    paddingLeft: 16,
    paddingRight: 16,
    backgroundColor: '#FFFFFF',
  },

  header: {
    width: '100%',
    // backgroundColor: 'red',
    height: 88,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowOffset: '0px 0.5px 0px',
  },

  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 32,
  },

  avatar: {
    width: 60,
    height: 60,
    borderRadius: 16,
    backgroundColor: '#F6F6F6',
    marginRight: 8,
  },

  textName: {
    fontFamily: 'Roboto-Bold',
    fontWeight: 700,
    fontSize: 13,
    lineHeight: 15,
    color: '#212121',
  },

  textEmail: {
    //'Roboto-Regular'
    fontFamily: 'Roboto-Regular',
    fontWeight: 400,
    fontSize: 11,
    lineHeight: 13,
    color: 'rgba(33, 33, 33, 0.8)',
  },
});
