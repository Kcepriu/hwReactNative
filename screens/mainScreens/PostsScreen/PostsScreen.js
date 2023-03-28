import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//mport Screens
import DefaultPostsScreen from '../../nestedScreens/DefaultPostsScreen';
import CreatePostsScreen from '../CreatePostsScreen/CreatePostsScreen';
import ProfileScreen from '../ProfileScreen/ProfileScreen';

//Import ADD component
import { BtnHeaderLogOut } from '../../../components/BtnHeader/BtnHeader';
import { BtnToPublications } from '../../../components/BtnHeader/BtnHeader';
import TabBar from '../../../components/TabBar/TabBar';

//Import Style
import { stylesHeader } from './Header.styles';

const MainTabs = createBottomTabNavigator();

const PostsScreen = ({ navigation }) => {
  return (
    <MainTabs.Navigator
      tabBar={props => <TabBar {...props} />}
      // tabBarHideOnKeyboard={true}
      screenOptions={({ route }) => ({
        ...stylesHeader.tabNavigatiom,
      })}
    >
      <MainTabs.Screen
        name="DefaultPostsScreen"
        component={DefaultPostsScreen}
        options={{
          headerShown: true,
          title: 'Публикации',

          headerRight: () => BtnHeaderLogOut({ navigation }),
        }}
        screenOptions={{
          tabBarIcon: ({ focused, color, size }) => {},
        }}
      />
      <MainTabs.Screen
        name="CreatePostsScreen"
        component={CreatePostsScreen}
        options={{
          headerShown: true,
          title: 'Создать публикацию',
          headerLeft: () => BtnToPublications({ navigation }),
        }}
      />
      <MainTabs.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{ headerShown: false }}
      />
    </MainTabs.Navigator>
  );
};

// const PostsScreen = ({ navigation }) => {
//   return (
//     <NestedScreen.Navigator screenOptions={{}}>
//       <NestedScreen.Screen
//         name="DefaultPostsScreen"
//         component={DefaultPostsScreen}
//         options={{
//           headerShown: false,
//         }}
//       />
//       <NestedScreen.Screen
//         name="MapScreen"
//         component={MapScreen}
//         options={{
//           headerShown: true,
//           headerTitle: 'Hello',
//           title: 'TEst hhh',
//           headerRight: () => BtnToPublications({ navigation }),
//         }}
//       />
//       <NestedScreen.Screen name="CommentsScreen" component={CommentsScreen} />
//     </NestedScreen.Navigator>
//   );
// };

export default PostsScreen;
