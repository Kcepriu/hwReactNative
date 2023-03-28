import { useEffect, useState } from 'react';
import {
  Text,
  View,
  FlatList,
  SafeAreaView,
  ScrollView,
  StatusBar,
} from 'react-native';

import CardPost from '../../components/CardPost/CardPost';

import { styles } from './DefaultPostsScreen.styles';

const DefaultPostsScreen = ({ route, navigation }) => {
  const [posts, setPosts] = useState([]);

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
              <Text style={styles.textName}>Natali Romanova</Text>
              <Text style={styles.textEmail}>email@example.com</Text>
            </View>
          </View>
          <View>
            {/* <SafeAreaView style={{ paddingTop: StatusBar.currentHeight }}> */}
            <FlatList
              data={posts}
              keyExtractor={item => item.id.toString()}
              renderItem={({ item }) => (
                <CardPost post={item} navigation={navigation} />
              )}
            />
            {/* </SafeAreaView> */}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DefaultPostsScreen;
