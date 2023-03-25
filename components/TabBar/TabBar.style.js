import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  tabBar: {
    height: 83,
    paddingTop: 9,

    flexDirection: 'row',
    gap: 31,

    justifyContent: 'center',

    backgroundColor: '#FFF',

    borderTopColor: 'rgba(0, 0, 0, 0.3)',
    borderTopWidth: 1,

    elevation: 10, // this controls the shadow depth

    shadowOffset: 1,
    shadowColor: 'black',
    shadowOpacity: 1,
    shadowRadius: 10,
  },

  tabBarDelete: {
    height: 83,
    paddingTop: 9,

    flexDirection: 'row',
    gap: 31,

    justifyContent: 'center',

    backgroundColor: '#FFF',
  },

  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 40,
    height: 40,
  },

  buttonActive: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 70,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#FF6C00',
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
