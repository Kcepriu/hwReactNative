import { useState } from 'react';
import {
  TextInput,
  View,
  Image,
  TouchableOpacity,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';

import { IconUp } from '../../../components/Icons/icons';
import { styles } from './CommentsScreen.styles';

const CommentsScreen = ({ route, navigation }) => {
  const [newComment, setNewComment] = useState('');
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);

  const photo = route.params.post.photo;

  const keyboardHide = () => {
    console.log('keyboardHide');

    setIsShowKeyboard(false);
    Keyboard.dismiss();
  };

  return (
    <>
      <TouchableWithoutFeedback onPress={keyboardHide}>
        <View style={styles.container}>
          <View style={styles.containerPhoto}>
            <Image style={styles.photo} source={{ uri: photo }} />
          </View>

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
              onPress={() => console.log('add comment')}
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
