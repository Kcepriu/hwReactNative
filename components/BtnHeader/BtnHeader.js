import { TouchableOpacity } from 'react-native';
import { IconLogOut, IconLeft } from '../Icons/icons';
import { styles } from './BtnHeader.styles';
import { useDispatch } from 'react-redux';
import { logOutUser } from '../../redux/auth/operation';

export const BtnHeaderLogOut = ({ navigation }) => {
  const dispatch = useDispatch();

  return (
    <TouchableOpacity
      style={styles.btnLogOut}
      activeOpacity={0.8}
      // onPress={() => navigation.navigate('Login')}
      onPress={() => dispatch(logOutUser())}
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
