import { Text, View, Image } from 'react-native';
import { styles } from './CommentsScreen.styles';

const CommentsScreen = ({ route, navigation }) => {
  const photo = route.params.post.photo;

  return (
    <View style={styles.container}>
      <View style={styles.containerPhoto}>
        <Image style={styles.photo} source={{ uri: photo }} />
      </View>
    </View>
  );
};

export default CommentsScreen;
