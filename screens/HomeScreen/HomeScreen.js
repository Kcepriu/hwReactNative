import { createStackNavigator } from '@react-navigation/stack';
const NestedScreen = createStackNavigator();

//Import Screens
import PostsScreen from '../mainScreens/PostsScreen/PostsScreen';
import MapScreen from '../nestedScreens/MapScreen/MapScreen';
import CommentsScreen from '../nestedScreens/CommentsScreen/CommentsScreen';

import { stylesHeader } from '../mainScreens/PostsScreen/Header.styles';

//{{ tabBarShowLabel: false }}>

const HomeScreen = ({ navigation, route }) => {
  return (
    <NestedScreen.Navigator
      screenOptions={({ route }) => ({
        ...stylesHeader.tabNavigatiom,
      })}
    >
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
          headerTitle: 'Карта',
        }}
      />
      <NestedScreen.Screen
        name="CommentsScreen"
        component={CommentsScreen}
        options={{
          headerTitle: 'Комментарии',
        }}
      />
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
