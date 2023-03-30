import { useEffect } from 'react';
import {
  Text,
  View,
  FlatList,
  SafeAreaView,
  ScrollView,
  StatusBar,
} from 'react-native';
import { useDispatch } from 'react-redux';

import useAuth from '../../hooks/useAuth';
import usePosts from '../../hooks/usePosts';
import { getPosts } from '../../redux/posts/operation';

import CardPost from '../../components/CardPost/CardPost';

import { styles } from './DefaultPostsScreen.styles';

const DefaultPostsScreen = ({ navigation }) => {
  const dispatch = useDispatch();

  const {
    user: { displayName, email, photoURL, uid },
  } = useAuth();

  const { userPosts } = usePosts();

  useEffect(() => {
    dispatch(getPosts(uid));
  }, [dispatch]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* paddingTop: StatusBar.currentHeight */}
      <ScrollView style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
        <View style={styles.container}>
          <View style={styles.userInfo}>
            <View style={styles.avatar}></View>
            <View>
              <Text style={styles.textName}>{displayName}</Text>
              <Text style={styles.textEmail}>{email}</Text>
            </View>
          </View>
          <View>
            {/* <SafeAreaView style={{ paddingTop: StatusBar.currentHeight }}> */}
            {userPosts.map(item => (
              <CardPost
                post={item}
                navigation={navigation}
                key={item.documentId.toString()}
              />
            ))}
            {/* <FlatList
              data={posts}
              keyExtractor={item => item.id.toString()}
              renderItem={({ item }) => (
                <CardPost post={item} navigation={navigation} />
              )}
            /> */}
            {/* </SafeAreaView> */}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DefaultPostsScreen;
