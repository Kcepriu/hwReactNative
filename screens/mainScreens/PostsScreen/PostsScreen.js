import React from 'react';
import { moduleName, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import DefaultPostsScreen from '../../../nestedScreens/DefaultPostsScreen';
import MapScreen from '../../../nestedScreens/MapScreen';
import { getHeaderTitle } from '@react-navigation/elements';

const NestedScreen = createStackNavigator();

const PostsScreen = () => {
  return (
    <NestedScreen.Navigator>
      <NestedScreen.Screen
        name="DefaultPostsScreen"
        component={DefaultPostsScreen}
        options={{
          headerShown: false,
        }}
      />
      <NestedScreen.Screen
        name="MapScreen"
        component={MapScreen}
        options={{
          title: 'TEst',
          headerMode: 'float',
        }}
      />

      {/* <NestedScreen.Screen name="Comments" component={CommentsScreen} /> */}
    </NestedScreen.Navigator>
  );
};

export default PostsScreen;
