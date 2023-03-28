import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './TabBar.style';

import {
  IconPlus,
  IconUser,
  IconTrash,
  IconGrid,
} from './../../components/Icons/icons';

const elementPostsScreen = {
  route: 'PostsScreen',
  icon: <IconGrid stroke="rgba(33, 33, 33, 0.8)" />,
  iconActive: <IconGrid stroke="#FFF" />,
};

const elementCreatePostsScreen = {
  route: 'CreatePostsScreen',
  icon: <IconPlus fill="rgba(33, 33, 33, 0.8)" />,
  iconActive: <IconPlus fill="#FFF" />,
};
const elementProfileScreen = {
  route: 'ProfileScreen',
  icon: <IconUser stroke="rgba(33, 33, 33, 0.8)" />,
  iconActive: <IconUser stroke="#FFF" />,
};

const elementDelete = {
  route: 'PostsScreen',
  icon: <IconTrash fill="rgba(189, 189, 189, 1)" />,
  iconActive: <IconTrash fill="rgba(189, 189, 189, 1)" />,
};

const routes = [
  [elementPostsScreen, elementCreatePostsScreen, elementProfileScreen],
  [elementDelete],
  [elementPostsScreen, elementProfileScreen, elementCreatePostsScreen],
];

const TabBar = ({ state, descriptors, navigation }) => {
  if (state.index !== 1) {
    return (
      <View style={styles.tabBar}>
        {routes[state.index].map((element, index) => {
          const curentStyle = index === 1 ? styles.buttonActive : styles.button;

          return (
            <TouchableOpacity
              key={element.route}
              style={curentStyle}
              accessibilityRole="button"
              onPress={() => {
                const name =
                  element.route === 'PostsScreen'
                    ? 'DefaultPostsScreen'
                    : element.route;
                navigation.navigate({ name, merge: true });
              }}
            >
              {index === 1 ? element.iconActive : element.icon}
            </TouchableOpacity>
          );
        })}
      </View>
    );
  } else {
    const element = routes[state.index][0];
    return (
      <View style={styles.tabBarDelete}>
        <TouchableOpacity
          style={styles.buttonDelete}
          accessibilityRole="button"
          onPress={() => {
            navigation.navigate({ name: 'DefaultPostsScreen', merge: true });
          }}
        >
          {element.icon}
        </TouchableOpacity>
      </View>
    );
  }
};

export default TabBar;
