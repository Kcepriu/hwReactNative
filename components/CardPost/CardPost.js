import { Text, View, Image } from 'react-native';
import { IconLocation, IconLike, IconMessage } from '../Icons/icons';
import { styles } from './CardPost.styles';

const CardPost = () => {
  return (
    <>
      {/* containerPhoto/ */}
      <View style={styles.containerPhoto}>
        {/* photo */}
        <View style={styles.photo}></View>
        <Text style={styles.textUnderPhoto}>Лес</Text>
        <View style={styles.containerUnderPhoto}>
          <View style={styles.containerSocials}>
            <View style={styles.containerMessages}>
              <IconMessage fill="#FF6C00" />
              <Text style={styles.textCount}>8</Text>
            </View>

            <View style={styles.containerLikes}>
              <IconLike fill="#FF6C00" />
              <Text style={styles.textCount}>153</Text>
            </View>
          </View>

          <View style={styles.containerLocation}>
            <IconLocation />
            <Text style={styles.textLocation}>Italy</Text>
          </View>
        </View>
      </View>
    </>
  );
};

export default CardPost;
