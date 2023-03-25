import { StyleSheet } from 'react-native';

export const stylesHeader = StyleSheet.create({
  tabNavigatiom: {
    tabBarActiveTintColor: 'tomato',
    tabBarInactiveTintColor: 'gray',
    tabBarShowLabel: false,

    headerStyle: {
      shadowColor: 'rgba(0, 0, 0)',
      shadowOpacity: 0.3,
      shadowOffset: '0px 0.5px 0px',
    },
    headerTitleAlign: 'center',
    headerTintColor: '#000',

    headerTitleStyle: {
      fontFamily: 'Roboto-Medium',
      fontSize: 17,
      lineHeight: 22,
      color: '#212121',
    },
  },
});
