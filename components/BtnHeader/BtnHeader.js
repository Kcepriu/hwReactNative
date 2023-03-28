import { TouchableOpacity } from 'react-native';
import { IconLogOut, IconLeft } from '../Icons/icons';
import { styles } from './BtnHeader.styles';

export const BtnHeaderLogOut = ({ navigation }) => {
  return (
    <TouchableOpacity
      style={styles.btnLogOut}
      activeOpacity={0.8}
      onPress={() => navigation.navigate('Login')}
    >
      <IconLogOut />
    </TouchableOpacity>
  );
};

export const BtnToPublications = ({ navigation }) => {
  return (
    <TouchableOpacity
      style={styles.btnToPublications}
      activeOpacity={0.8}
      onPress={() => navigation.navigate('DefaultPostsScreen')}
    >
      <IconLeft />
    </TouchableOpacity>
  );
};

// export default { BtnHeaderLogOut };
