import { useEffect } from 'react';
import { Text, View, Image, SafeAreaView, ScrollView } from 'react-native';

import { useDispatch } from 'react-redux';

import useAuth from '../../../hooks/useAuth';
import usePosts from '../../../hooks/usePosts';
import { getPosts } from '../../../redux/posts/operation';

import { styles } from './ProfileScreen.styles';
import CardPost from '../../../components/CardPost/CardPost';
import { BtnHeaderLogOut } from '../../../components/BtnHeader/BtnHeader';

const ProfileScreen = ({ navigation }) => {
  const dispatch = useDispatch();

  const {
    user: { displayName, email, photoURL, uid },
  } = useAuth();
  const { userPosts } = usePosts();

  useEffect(() => {
    dispatch(getPosts(uid));
  }, [dispatch]);

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
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView>
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
                <BtnHeaderLogOut
                  style={styles.btnLogOut}
                  navigation={navigation}
                />
              </View>

              <Text style={styles.titleName}>{displayName}</Text>

              <View style={styles.wrapPosts}>
                {/* <SafeAreaView style={{ paddingTop: StatusBar.currentHeight }}> */}
                {userPosts.map(item => (
                  <CardPost
                    post={item}
                    navigation={navigation}
                    key={item.documentId.toString()}
                  />
                ))}
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default ProfileScreen;
