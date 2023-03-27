import React from 'react';
import { moduleName, Text } from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import CreatePostsScreen from '../CreatePostsScreen/CreatePostsScreen';
import ProfileScreen from '../ProfileScreen/ProfileScreen';

import { BtnHeaderLogOut } from '../../../components/BtnHeader/BtnHeader';

import { createStackNavigator } from '@react-navigation/stack';
import DefaultPostsScreen from '../../nestedScreens/DefaultPostsScreen';
import MapScreen from '../../nestedScreens/MapScreen/MapScreen';
import CommentsScreen from '../../nestedScreens/CommentsScreen/CommentsScreen';
import { BtnToPublications } from '../../../components/BtnHeader/BtnHeader';

import { getHeaderTitle } from '@react-navigation/elements';
import TabBar from '../../../components/TabBar/TabBar';

const NestedScreen = createStackNavigator();
const MainTabs = createBottomTabNavigator();

const PostsScreen = ({ navigation }) => {
  return (
    <MainTabs.Navigator>
      <MainTabs.Screen
        name="DefaultPostsScreen"
        component={DefaultPostsScreen}
      />
      <MainTabs.Screen name="CreatePostsScreen" component={CreatePostsScreen} />
      <MainTabs.Screen name="ProfileScreen" component={ProfileScreen} />
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
