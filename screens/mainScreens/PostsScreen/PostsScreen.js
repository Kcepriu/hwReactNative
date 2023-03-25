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
      {/* <View style={styles.header}>
        <Text>Публикации</Text>
      </View> */}
      <Text>PostsScreen</Text>
      <IconPlus
        // style={{ width: 48, height: 48 }}

        fill="green"
        width={100}
        height={100}
      />
      <IconCamera fill="green" />
      <IconX fill="green" />
      <IconUser fill="green" />
      <IconUp fill="green" />
      <IconTrash fill="green" />
      <IconLike fill="green" />
      <IconMessage fill="green" />
      <IconLocation fill="green" />
      <IconLogOut fill="green" />
      <IconGrid fill="green" />
      <IconTrash fill="green" />
      <IconLike fill="green" />
      <IconMessage fill="green" />
      <IconLocation fill="green" />
      <IconLogOut fill="green" />
      <IconGrid fill="green" />
      <IconTrash fill="green" />
      <IconLike fill="green" />
      <IconMessage fill="green" />
      <IconLocation fill="green" />
      <IconLogOut fill="green" />
      <IconGrid fill="green" />
      <IconTrash fill="green" />
      <IconLike fill="green" />
      <IconMessage fill="green" />
      <IconLocation fill="green" />
      <IconLogOut fill="green" />
      <IconGrid fill="green" />
      <IconTrash fill="green" />
      <IconLike fill="green" />
      <IconMessage fill="green" />
      <IconLocation fill="green" />
      <IconLogOut fill="green" />
      <IconGrid fill="green" />
      <IconTrash fill="green" />
      <IconLike fill="green" />
      <IconMessage fill="green" />
      <IconLocation fill="green" />
      <IconLogOut fill="green" />
      <IconGrid fill="green" />
      <IconTrash fill="green" />
      <IconLike fill="green" />
      <IconMessage fill="green" />
      <IconLocation fill="green" />
      <IconLogOut fill="green" />
      <IconGrid fill="green" />
      <IconTrash fill="green" />
      <IconLike fill="green" />
      <IconMessage fill="green" />
      <IconLocation fill="green" />
      <IconLogOut fill="green" />
      <IconGrid fill="green" />
      <IconTrash fill="green" />
      <IconLike fill="green" />
      <IconMessage fill="green" />
      <IconLocation fill="green" />
      <IconLogOut fill="green" />
      <IconGrid fill="green" />
      <IconTrash fill="green" />
      <IconLike fill="green" />
      <IconMessage fill="green" />
      <IconLocation fill="green" />
      <IconLogOut fill="green" />
      <IconGrid fill="green" />
      <IconTrash fill="green" />
      <IconLike fill="green" />
      <IconMessage fill="green" />
      <IconLocation fill="green" />
      <IconLogOut fill="green" />
      <IconGrid fill="green" />
      <IconTrash fill="green" />
      <IconLike fill="green" />
      <IconMessage fill="green" />
      <IconLocation fill="green" />
      <IconLogOut fill="green" />
      <IconGrid fill="green" />
      <IconTrash fill="green" />
      <IconLike fill="green" />
      <IconMessage fill="green" />
      <IconLocation fill="green" />
      <IconLogOut fill="green" />
      <IconGrid fill="green" />
      <IconTrash fill="green" />
      <IconLike fill="green" />
      <IconMessage fill="green" />
      <IconLocation fill="green" />
      <IconLogOut fill="green" />
      <IconGrid fill="green" />
      <IconTrash fill="green" />
      <IconLike fill="green" />
      <IconMessage fill="green" />
      <IconLocation fill="green" />
      <IconLogOut fill="green" />
      <IconGrid fill="green" />
      <IconTrash fill="green" />
      <IconLike fill="green" />
      <IconMessage fill="green" />
      <IconLocation fill="green" />
      <IconLogOut fill="green" />
      <IconGrid fill="green" />
      <IconTrash fill="green" />
      <IconLike fill="green" />
      <IconMessage fill="green" />
      <IconLocation fill="green" />
      <IconLogOut fill="green" />
      <IconGrid fill="green" />
      <IconTrash fill="green" />
      <IconLike fill="green" />
      <IconMessage fill="green" />
      <IconLocation fill="green" />
      <IconLogOut fill="green" />
      <IconGrid fill="green" />
      <IconTrash fill="green" />
      <IconLike fill="green" />
      <IconMessage fill="green" />
      <IconLocation fill="green" />
      <IconLogOut fill="green" />
      <IconGrid fill="green" />
      <IconTrash fill="green" />
      <IconLike fill="green" />
      <IconMessage fill="green" />
      <IconLocation fill="green" />
      <IconLogOut fill="green" />
      <IconGrid fill="green" />
      <IconTrash fill="green" />
      <IconLike fill="green" />
      <IconMessage fill="green" />
      <IconLocation fill="green" />
      <IconLogOut fill="green" />
      <IconGrid fill="green" />
      <IconTrash fill="green" />
      <IconLike fill="green" />
      <IconMessage fill="green" />
      <IconLocation fill="green" />
      <IconLogOut fill="green" />
      <IconGrid fill="green" />
      <IconTrash fill="green" />
      <IconLike fill="green" />
      <IconMessage fill="green" />
      <IconLocation fill="green" />
      <IconLogOut fill="green" />
      <IconGrid fill="green" />
      <IconTrash fill="green" />
      <IconLike fill="green" />
      <IconMessage fill="green" />
      <IconLocation fill="green" />
      <IconLogOut fill="green" />
      <IconGrid fill="green" />
      <IconTrash fill="green" />
      <IconLike fill="green" />
      <IconMessage fill="green" />
      <IconLocation fill="green" />
      <IconLogOut fill="green" />
      <IconGrid fill="green" />
      <IconTrash fill="green" />
      <IconLike fill="green" />
      <IconMessage fill="green" />
      <IconLocation fill="green" />
      <IconLogOut fill="green" />
      <IconGrid fill="green" />
      <IconTrash fill="green" />
      <IconLike fill="green" />
      <IconMessage fill="green" />
      <IconLocation fill="green" />
      <IconLogOut fill="green" />
      <IconGrid fill="green" />

      <IconLogOut fill="green" />
      <IconGrid fill="green" />
      <IconTrash fill="green" />
      <IconLike fill="green" />
      <IconMessage fill="green" />
      <IconLocation fill="green" />
      <IconLogOut fill="green" />
      <IconGrid fill="green" />
      <IconTrash fill="green" />
      <IconLike fill="green" />
      <IconMessage fill="green" />
      <IconLocation fill="green" />
      <IconLogOut fill="green" />
      <IconGrid fill="green" />
      <IconTrash fill="green" />
      <IconLike fill="green" />
      <IconMessage fill="green" />
      <IconLocation fill="green" />
      <IconLogOut fill="green" />
      <IconGrid fill="green" />
      <IconTrash fill="green" />
      <IconLike fill="green" />
      <IconMessage fill="green" />
      <IconLocation fill="green" />
      <IconLogOut fill="green" />
      <IconGrid fill="green" />
      <IconTrash fill="green" />
      <IconLike fill="green" />
      <IconMessage fill="green" />
      <IconLocation fill="green" />
      <IconLogOut fill="green" />
      <IconGrid fill="green" />
      <IconTrash fill="green" />
      <IconLike fill="green" />
      <IconMessage fill="green" />
      <IconLocation fill="green" />
      <IconLogOut fill="green" />
      <IconGrid fill="green" />
    </View>
  );
};

export default PostsScreen;
