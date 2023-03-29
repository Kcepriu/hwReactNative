import { Text, View, Image, SafeAreaView, ScrollView } from 'react-native';

import useAuth from '../../../hooks/useAuth';

import { styles } from './ProfileScreen.styles';
import CardPost from '../../../components/CardPost/CardPost';
import { BtnHeaderLogOut } from '../../../components/BtnHeader/BtnHeader';

const ProfileScreen = ({ navigation }) => {
  const {
    user: { displayName, email, photoURL, uid },
  } = useAuth();
  return (
    <>
      <Image
        style={{
          flex: 1,
          width: '100%',
          position: 'absolute',
          resizeMode: 'cover',
        }}
        source={require('../../../assets/images/background_1x.jpg')}
      />

      <View style={styles.container}>
        <View style={styles.containerMainLogin}>
          <View style={styles.containerAvatar}>
            {/* <Image
              style={styles.avatar}
              width={120}
              height={120}
              // source={require('@expo/snack-static/react-native-logo.png')}
            /> */}
          </View>

          <View style={styles.btnLogOut}>
            <BtnHeaderLogOut style={styles.btnLogOut} navigation={navigation} />
          </View>

          <Text style={styles.titleName}>{displayName}</Text>
          {/* <SafeAreaView style={styles.scroolContainer}> */}
          {/* <ScrollView> */}
          {/* <CardPost /> */}
          {/* <CardPost /> */}
          {/* </ScrollView> */}
          {/* </SafeAreaView>  */}
        </View>
      </View>
    </>
  );
};

export default ProfileScreen;
