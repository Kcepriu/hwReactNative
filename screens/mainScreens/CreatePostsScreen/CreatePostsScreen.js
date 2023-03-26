import { Text, View } from 'react-native';
import { styles } from './CreatePostsScreen.styles';
import EditPublication from '../../../components/EditPublication/EditPublication';

const CreatePostsScreen = () => {
  return (
    <View style={styles.container}>
      <EditPublication />
    </View>
  );
};

export default CreatePostsScreen;
