import { useSelector } from 'react-redux';
import {
  selectUserPosts,
  selectPerformedOperation,
  selectCurentPost,
  selectComments,
} from '../redux/posts/selectors';

const usePosts = () => {
  const userPosts = useSelector(selectUserPosts);
  const performedOperation = useSelector(selectPerformedOperation);
  const curentPost = useSelector(selectCurentPost);
  const comments = useSelector(selectComments);
  return { userPosts, performedOperation, curentPost, comments };
};

export default usePosts;
