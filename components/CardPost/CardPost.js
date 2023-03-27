import { Text, View, Image } from 'react-native';
import { IconLocation, IconLike, IconMessage } from '../Icons/icons';
import { styles } from './CardPost.styles';

const CardPost = ({ post, navigation }) => {
  const handlerOpenMap = () => {
    navigation.navigate('MapScreen', { post });
  };
  const handlerOpenComment = () => {
    navigation.navigate('CommentsScreen', { post });
  };

  return (
    <>
      {/* containerPhoto/ */}
      <View style={styles.containerPhotos}>
        {/* photo */}
        <View style={styles.containerPhoto}>
          <Image style={styles.photo} source={{ uri: post.photo }} />
        </View>

        <Text style={styles.textUnderPhoto}>{post.name}</Text>
        <View style={styles.containerUnderPhoto}>
          <View style={styles.containerSocials}>
            <View style={styles.containerMessages}>
              <IconMessage fill="#FF6C00" onPress={handlerOpenComment} />
              <Text style={styles.textCount}>{post.countComment}</Text>
            </View>

            <View style={styles.containerLikes}>
              <IconLike fill="#FF6C00" />
              <Text style={styles.textCount}>{post.countLikes}</Text>
            </View>
          </View>

          <View style={styles.containerLocation}>
            <IconLocation onPress={handlerOpenMap} />
            <Text style={styles.textLocation}>{post.location}</Text>
          </View>
        </View>
      </View>
    </>
  );
};

export default CardPost;
