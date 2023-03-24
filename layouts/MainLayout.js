import { View, ImageBackground } from 'react-native';
import { styles } from './MainLayout.styles';

const MainLayouts = ({ children }) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.background}
        source={require('../assets/images/background_1x.jpg')}
      >
        {children}
      </ImageBackground>
    </View>
  );
};

export default MainLayouts;
