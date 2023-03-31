import { useSelector } from 'react-redux';
import {
  selectUserPosts,
  selectPerformedOperation,
  selectCurentPost,
  selectComments,
  selectIsRefresing,
} from '../redux/posts/selectors';

const usePosts = () => {
  const userPosts = useSelector(selectUserPosts);
  const performedOperation = useSelector(selectPerformedOperation);
  const curentPost = useSelector(selectCurentPost);
  const comments = useSelector(selectComments);
  const isRefresing = useSelector(selectIsRefresing);

  return { userPosts, performedOperation, curentPost, comments, isRefresing };
};

export default usePosts;
