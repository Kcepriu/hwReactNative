import { Text, View } from 'react-native';
import {
  IconPlus,
  IconCamera,
  IconX,
  IconUser,
  IconUp,
  IconTrash,
  IconLike,
  IconMessage,
  IconLocation,
  IconLogOut,
  IconGrid,
} from '../../../components/Icons/icons';
import { styles } from './PostsScreen.styles';

const PostsScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.userInfo}>
        <View style={styles.avatar}></View>
        <View>
          <Text style={styles.textName}>Natali Romanova</Text>
          <Text style={styles.textEmail}>email@example.com</Text>
        </View>
      </View>
    </View>
  );
};

export default PostsScreen;
