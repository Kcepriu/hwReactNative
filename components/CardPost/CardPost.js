import { Text, View, Image } from 'react-native';
import { useDispatch } from 'react-redux';
import { increaseLikesToPost } from '../../redux/posts/operation';
import { IconLocation, IconLike, IconMessage } from '../Icons/icons';
import { styles } from './CardPost.styles';

const CardPost = ({ post, navigation }) => {
  const dispatch = useDispatch();
  const handlerOpenMap = () => {
    navigation.navigate('MapScreen', { post });
  };

  const handlerOpenComment = () => {
    navigation.navigate('CommentsScreen', { post });
  };

  const handlerIncreaseLikes = () => {
    dispatch(increaseLikesToPost(post.documentId));
  };

  return (
    <>
      {/* containerPhoto/ */}
      <View style={styles.containerPhotos}>
        {/* photo */}
        <View style={styles.containerPhoto}>
          <Image style={styles.photo} source={{ uri: post.urlPhoto }} />
        </View>

        <Text style={styles.textUnderPhoto}>{post.name}</Text>
        <View style={styles.containerUnderPhoto}>
          <View style={styles.containerSocials}>
            <View style={styles.containerMessages}>
              <IconMessage
                fill={post.countComment > 0 ? '#FF6C00' : '#FFFFFF'}
                stroke={post.countComment > 0 ? '#FF6C00' : '#BDBDBD'}
                onPress={handlerOpenComment}
              />
              <Text style={styles.textCount}>{post.countComment}</Text>
            </View>

            <View style={styles.containerLikes}>
              <IconLike
                fill={post.countLikes > 0 ? '#FF6C00' : '#BDBDBD'}
                stroke={post.countLikes > 0 ? '#FF6C00' : '#BDBDBD'}
                onPress={handlerIncreaseLikes}
              />
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
