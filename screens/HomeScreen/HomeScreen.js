import { Text, View, TouchableOpacity, Button } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//Import Screens
import PostsScreen from '../mainScreens/PostsScreen/PostsScreen';
import CreatePostsScreen from '../mainScreens/CreatePostsScreen/CreatePostsScreen';
import ProfileScreen from '../mainScreens/ProfileScreen/ProfileScreen';

// import Components
import TabBar from '../../components/TabBar/TabBar';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  BtnHeaderLogOut,
  BtnToPublications,
} from '../../components/BtnHeader/BtnHeader';

// import STYLES
import { styles } from './HomeScreen.styles';
import { stylesHeader } from './Header.styles';

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
      tabBar={props => <TabBar {...props} />}
      screenOptions={({ route }) => ({
        // tabBarIcon: ({ focused, color, size }) => {
        //   let iconName;
        //   if (route.name === 'CreatePostsScreen') {
        //     iconName = focused ? 'ios-list' : 'ios-list-outline';
        //   } else if (route.name === 'PostsScreen') {
        //     iconName = focused
        //       ? 'ios-information-circle'
        //       : 'ios-information-circle-outline';
        //   } else if (route.name === 'ProfileScreen') {
        //     iconName = focused ? 'ios-list' : 'ios-list-outline';
        //   }

        //   // You can return any component that you like here!
        //   return <Ionicons name={iconName} size={size} color={color} />;
        // },

        ...stylesHeader.tabNavigatiom,
      })}
    >
      <MainTabs.Screen
        name="PostsScreen"
        options={{
          headerShown: true,
          title: 'Публикации',

          headerRight: () => BtnHeaderLogOut({ navigation }),
        }}
        component={PostsScreen}
        screenOptions={{
          tabBarIcon: ({ focused, color, size }) => {},
        }}
      />
      <MainTabs.Screen
        name="CreatePostsScreen"
        options={{
          headerShown: true,
          title: 'Создать публикацию',
          headerLeft: () => BtnToPublications({ navigation }),
        }}
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
