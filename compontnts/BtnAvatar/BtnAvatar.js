import { TouchableOpacity, View, Text, Image } from 'react-native';
import { styles } from './BtnAvatar.styles';

const BtnAvatar = () => {
  return (
    <View style={styles.button}>
      <Image
        width={13}
        height={13}
        source={require('../../assets/images/plus.png')}
      />
    </View>
  );
};

export default BtnAvatar;
