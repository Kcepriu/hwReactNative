import { Text, View, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import PostsScreen from '../mainScreens/PostsScreen/PostsScreen';
import CreatePostsScreen from '../mainScreens/CreatePostsScreen/CreatePostsScreen';
import ProfileScreen from '../mainScreens/ProfileScreen/ProfileScreen';

import Ionicons from 'react-native-vector-icons/Ionicons';

import { styles } from './HomeScreen.styles';

const MainTabs = createBottomTabNavigator();

const iconButton = ({ route }) => ({
  tabBarIcon: ({ focused, color, size }) => {
    let iconName;

    if (route.name === 'Profile') {
      iconName = focused
        ? 'ios-information-circle'
        : 'ios-information-circle-outline';
    } else if (route.name === 'Settings') {
      iconName = focused ? 'ios-list-box' : 'ios-list';
    }
    return <Ionicons name={iconName} size={size} color={color} />;
  },
});
//{{ tabBarShowLabel: false }}>
const HomeScreen = ({ navigation }) => {
  return (
    <MainTabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'PostsScreen') {
            iconName = focused
              ? 'ios-information-circle'
              : 'ios-information-circle-outline';
          } else if (route.name === 'CreatePostsScreen') {
            iconName = focused ? 'ios-list' : 'ios-list-outline';
          } else if (route.name === 'ProfileScreen') {
            iconName = focused ? 'ios-list' : 'ios-list-outline';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        tabBarShowLabel: false,
      })}
    >
      <MainTabs.Screen
        name="PostsScreen"
        options={{ headerShown: false }}
        component={PostsScreen}
        screenOptions={{
          tabBarIcon: ({ focused, color, size }) => {},
        }}
      />
      <MainTabs.Screen
        name="CreatePostsScreen"
        options={{ headerShown: false }}
        component={CreatePostsScreen}
      />
      <MainTabs.Screen
        name="ProfileScreen"
        options={{ headerShown: false }}
        component={ProfileScreen}
      />
    </MainTabs.Navigator>
  );
};

export default HomeScreen;

{
  /* <View style={styles.container}>
      <Text>HOME</Text>

      <TouchableOpacity
        // style={styles.btnNotAccount}
        activeOpacity={0.8}
        onPress={() => navigation.navigate('Login')}
      >
        <Text>LogIn</Text>
      </TouchableOpacity>
    </View> */
}
