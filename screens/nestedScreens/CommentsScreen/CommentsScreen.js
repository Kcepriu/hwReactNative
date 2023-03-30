import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  TextInput,
  View,
  Image,
  TouchableOpacity,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';

import useAuth from '../../../hooks/useAuth';
import usePosts from '../../../hooks/usePosts';
import { addComments, getComments } from '../../../redux/posts/operation';

import { IconUp } from '../../../components/Icons/icons';
import { styles } from './CommentsScreen.styles';
import { statusOperation } from '../../../redux/posts/statusOperation';

const CommentsScreen = ({ route }) => {
  const dispatch = useDispatch();
  const {
    user: { uid },
  } = useAuth();

  const { comments, performedOperation } = usePosts();

  const [newComment, setNewComment] = useState('');
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);

  const photo = route.params.post.photo;

  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
  };

  useEffect(() => {
    dispatch(getComments(route.params.post.documentId));
  }, [dispatch]);

  useEffect(() => {
    if (performedOperation === statusOperation.addCommentOK) {
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
      })
    );
  };

  return (
    <>
      <TouchableWithoutFeedback onPress={keyboardHide}>
        <View style={styles.container}>
          <View style={styles.containerPhoto}>
            <Image style={styles.photo} source={{ uri: photo }} />
          </View>
          {/* comments */}
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
      </TouchableWithoutFeedback>
    </>
  );
};

export default CommentsScreen;
