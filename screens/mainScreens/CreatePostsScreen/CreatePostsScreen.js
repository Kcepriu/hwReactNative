import { Text, View } from 'react-native';
import { styles } from './CreatePostsScreen.styles';
import EditPublication from '../../../components/EditPublication/EditPublication';

const CreatePostsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <EditPublication navigation={navigation} />
    </View>
  );
};

export default CreatePostsScreen;
