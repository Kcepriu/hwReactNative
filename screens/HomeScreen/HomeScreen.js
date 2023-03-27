import { createStackNavigator } from '@react-navigation/stack';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

//Import Screens
import PostsScreen from '../mainScreens/PostsScreen/PostsScreen';
import CreatePostsScreen from '../mainScreens/CreatePostsScreen/CreatePostsScreen';
import ProfileScreen from '../mainScreens/ProfileScreen/ProfileScreen';

import DefaultPostsScreen from '../nestedScreens/DefaultPostsScreen';
import MapScreen from '../nestedScreens/MapScreen/MapScreen';
import CommentsScreen from '../nestedScreens/CommentsScreen/CommentsScreen';

// import Components
import TabBar from '../../components/TabBar/TabBar';
import {
  BtnHeaderLogOut,
  BtnToPublications,
} from '../../components/BtnHeader/BtnHeader';

// import STYLES
import { stylesHeader } from './Header.styles';
import { moduleName, Text } from 'react-native';

const MainTabs = createBottomTabNavigator();

const NestedScreen = createStackNavigator();
//{{ tabBarShowLabel: false }}>

const TEst = () => {
  return (
    <NavigationContainer>
      <NestedScreen.Navigator>
        <NestedScreen.Screen
          name="PostsScreen"
          component={PostsScreen}
          options={{
            headerShown: false,
          }}
        />
        <NestedScreen.Screen
          name="MapScreen"
          component={MapScreen}
          options={{
            headerShown: true,
            headerTitle: 'Hello',
          }}
        />
        <NestedScreen.Screen name="CommentsScreen" component={CommentsScreen} />
      </NestedScreen.Navigator>
    </NavigationContainer>
  );
};
const HomeScreen = ({ navigation, route }) => {
  return (
    <NestedScreen.Navigator>
      <NestedScreen.Screen
        name="PostsScreen"
        component={PostsScreen}
        options={{
          headerShown: false,
        }}
      />
      <NestedScreen.Screen
        name="MapScreen"
        component={MapScreen}
        options={{
          headerShown: true,
          headerTitle: 'Hello',
        }}
      />
      <NestedScreen.Screen name="CommentsScreen" component={CommentsScreen} />
    </NestedScreen.Navigator>
  );
};

// const HomeScreen = ({ navigation, route }) => {
//   const routeName = getFocusedRouteNameFromRoute(route) ?? 'Feed';
//   console.log('routeName', routeName);

//   return (
//     <MainTabs.Navigator
//       tabBar={props => <TabBar {...props} />}
//       // tabBarHideOnKeyboard={true}
//       screenOptions={({ route }) => ({
//         ...stylesHeader.tabNavigatiom,
//       })}
//     >
//       <MainTabs.Screen
//         key="PostsScreen"
//         name="PostsScreen"
//         options={{
//           headerShown: true,
//           title: 'Публикации',

//           headerRight: () => BtnHeaderLogOut({ navigation }),
//         }}
//         component={PostsScreen}
//         screenOptions={{
//           tabBarIcon: ({ focused, color, size }) => {},
//         }}
//       />
//       <MainTabs.Screen
//         key="CreatePostsScreen"
//         name="CreatePostsScreen"
//         options={{
//           headerShown: true,
//           title: 'Создать публикацию',
//           headerLeft: () => BtnToPublications({ navigation }),
//         }}
//         component={CreatePostsScreen}
//       />
//       <MainTabs.Screen
//         key="ProfileScreen"
//         name="ProfileScreen"
//         options={{ headerShown: false }}
//         component={ProfileScreen}
//       />
//     </MainTabs.Navigator>
//   );
// };

export default HomeScreen;
