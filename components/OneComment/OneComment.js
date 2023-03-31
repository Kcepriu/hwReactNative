import { Text, View, Image } from 'react-native';
import format from 'date-fns/format';

import { styles } from './OneComment.styles';

const OneComment = ({ post, currentUserId }) => {
  return (
    <View
      style={{
        ...styles.containerComment,
        flexDirection: post.userId === currentUserId ? 'row-reverse' : 'row',
      }}
    >
      <View style={styles.containerPhoto}>
        {/* <Image style={styles.photo} source={{ uri: urlPhoto }} /> */}
      </View>
      <View
        style={{
          ...styles.containerText,
          borderTopLeftRadius: post.userId === currentUserId ? 6 : 0,
          borderTopRightRadius: post.userId === currentUserId ? 0 : 6,
        }}
      >
        <Text>{post.comment}</Text>
        <View style={styles.wrapData}>
          <Text style={styles.textData}>
            {format(post.datePublacation, 'dd LLLL,y | HH:mm')}
          </Text>
        </View>
      </View>
    </View>
  );
};

//

export default OneComment;
