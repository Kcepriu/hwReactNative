import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//Import Screens
import PostsScreen from '../mainScreens/PostsScreen/PostsScreen';
import CreatePostsScreen from '../mainScreens/CreatePostsScreen/CreatePostsScreen';
import ProfileScreen from '../mainScreens/ProfileScreen/ProfileScreen';

// import Components
import TabBar from '../../components/TabBar/TabBar';
import {
  BtnHeaderLogOut,
  BtnToPublications,
} from '../../components/BtnHeader/BtnHeader';

// import STYLES
import { stylesHeader } from './Header.styles';

const MainTabs = createBottomTabNavigator();

//{{ tabBarShowLabel: false }}>
const HomeScreen = ({ navigation }) => {
  return (
    <MainTabs.Navigator
      tabBar={props => <TabBar {...props} />}
      // tabBarHideOnKeyboard={true}
      screenOptions={({ route }) => ({
        ...stylesHeader.tabNavigatiom,
      })}
    >
      <MainTabs.Screen
        key="PostsScreen"
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
        key="CreatePostsScreen"
        name="CreatePostsScreen"
        options={{
          headerShown: true,
          title: 'Создать публикацию',
          headerLeft: () => BtnToPublications({ navigation }),
        }}
        component={CreatePostsScreen}
      />
      <MainTabs.Screen
        key="ProfileScreen"
        name="ProfileScreen"
        options={{ headerShown: false }}
        component={ProfileScreen}
      />
    </MainTabs.Navigator>
  );
};

export default HomeScreen;
