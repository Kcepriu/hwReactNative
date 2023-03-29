import { useEffect, useState } from 'react';
import {
  Text,
  View,
  FlatList,
  SafeAreaView,
  ScrollView,
  StatusBar,
} from 'react-native';
import useAuth from '../../hooks/useAuth';

import CardPost from '../../components/CardPost/CardPost';

import { styles } from './DefaultPostsScreen.styles';

const DefaultPostsScreen = ({ route, navigation }) => {
  const [posts, setPosts] = useState([]);

  const {
    user: { displayName, email, photoURL, uid },
  } = useAuth();
  useEffect(() => {
    if (route?.params?.newPost) {
      setPosts(prev => [...prev, route?.params?.newPost]);
    }
  }, [route.params]);

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
            {posts.map(item => (
              <CardPost
                post={item}
                navigation={navigation}
                key={item.id.toString()}
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
