import { useEffect, useRef } from 'react';
import { Text, View, FlatList, SafeAreaView, ScrollView } from 'react-native';
import { useDispatch } from 'react-redux';

import useAuth from '../../hooks/useAuth';
import usePosts from '../../hooks/usePosts';
import { getPosts } from '../../redux/posts/operation';
import { statusOperation } from '../../redux/posts/statusOperation';

import CardPost from '../../components/CardPost/CardPost';

import { styles } from './DefaultPostsScreen.styles';

const DefaultPostsScreen = ({ navigation }) => {
  const dispatch = useDispatch();

  const {
    user: { displayName, email, photoURL, uid },
  } = useAuth();

  const { userPosts, performedOperation } = usePosts();

  const scrollViewRef = useRef();

  useEffect(() => {
    dispatch(getPosts(uid));
  }, [dispatch]);

  useEffect(() => {
    if (performedOperation === statusOperation.addPostOK)
      scrollViewRef.current.scrollToEnd({ animated: true });
  }, [performedOperation]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* paddingTop: StatusBar.currentHeight */}
      <ScrollView
        style={{ flex: 1, backgroundColor: '#FFFFFF' }}
        ref={scrollViewRef}
      >
        <View style={styles.container}>
          <View style={styles.userInfo}>
            <View style={styles.avatar}></View>
            <View>
              <Text style={styles.textName}>{displayName}</Text>
              <Text style={styles.textEmail}>{email}</Text>
            </View>
          </View>
          <View>
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
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DefaultPostsScreen;
