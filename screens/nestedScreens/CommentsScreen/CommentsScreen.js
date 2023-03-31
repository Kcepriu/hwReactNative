import { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  TextInput,
  View,
  Image,
  TouchableOpacity,
  Keyboard,
  TouchableWithoutFeedback,
  SafeAreaView,
  ScrollView,
} from 'react-native';

import useAuth from '../../../hooks/useAuth';
import usePosts from '../../../hooks/usePosts';
import { addComments, getComments } from '../../../redux/posts/operation';
import { statusOperation } from '../../../redux/posts/statusOperation';

import { IconUp } from '../../../components/Icons/icons';
import { styles } from './CommentsScreen.styles';

import OneComment from '../../../components/OneComment/OneComment';

const CommentsScreen = ({ route }) => {
  const dispatch = useDispatch();
  const {
    user: { uid },
  } = useAuth();

  const { comments, performedOperation, isRefresing } = usePosts();

  const [newComment, setNewComment] = useState('');
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const scrollViewRef = useRef();

  const urlPhoto = route.params.post.urlPhoto;

  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
  };

  useEffect(() => {
    dispatch(getComments(route.params.post.documentId));
  }, [dispatch]);

  useEffect(() => {
    if (performedOperation === statusOperation.addCommentOK) {
      scrollViewRef.current.scrollToEnd();
      setNewComment('');
      keyboardHide();
    }
  }, [performedOperation]);

  const handlerAddComment = () => {
    if (!newComment) return;

    dispatch(
      addComments({
        documentId: route.params.post.documentId,
        userId: uid,
        comment: newComment,
        datePublacation: Date.now(),
      })
    );
  };

  return (
    <>
      <SafeAreaView style={{ flex: 1 }}>
        {/* <TouchableWithoutFeedback onPress={keyboardHide}> */}
        <View style={styles.container}>
          <ScrollView style={{ flex: 1, width: '100%' }} ref={scrollViewRef}>
            <View style={styles.containerTop}>
              <View style={styles.containerPhoto}>
                <Image style={styles.photo} source={{ uri: urlPhoto }} />
              </View>
              {/* comments */}

              {/* {!isRefresing && ( */}
              <View style={styles.containerComment}>
                {comments.map(post => (
                  <OneComment
                    key={post.postId}
                    post={post}
                    currentUserId={uid}
                  ></OneComment>
                ))}
              </View>
              {/* )} */}
            </View>
          </ScrollView>

          <View
            style={{
              ...styles.wrapperInput,
              marginBottom: isShowKeyboard ? 10 : 0,
            }}
          >
            <TextInput
              style={styles.input}
              textAlign="left"
              value={newComment}
              placeholder="Комментировать..."
              placeholderTextColor="#BDBDBD"
              onChangeText={value => setNewComment(value)}
              onFocusOther={() => {
                setIsShowKeyboard(true);
              }}
              // onPressIn={() => console.log('location')}
            />

            <TouchableOpacity
              style={styles.btnComment}
              activeOpacity={0.8}
              onPress={handlerAddComment}
            >
              <IconUp />
            </TouchableOpacity>
          </View>
        </View>
        {/* </TouchableWithoutFeedback> */}
      </SafeAreaView>
    </>
  );
};

export default CommentsScreen;
