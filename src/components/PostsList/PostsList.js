import { useSelector, useDispatch } from "react-redux";
import { useEffect } from 'react';

import ListPost from './ListPost/ListPost';

import { selectAllPosts, getPostsStatus, getPostsError, fetchPosts } from '../../features/post/postSlice';

const PostsList = () => {
    const dispatch = useDispatch();

    const posts = useSelector(selectAllPosts);
    const status = useSelector(getPostsStatus);
    const error = useSelector(getPostsError);

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchPosts())
        }
    }, [status, dispatch]);

    let content;

    if (status === 'loading') {
        content = <p>"Loading..."</p>;
    } else if (status === 'success') {
        const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date));
        content = orderedPosts.map(post => <ListPost key={post.id} post={post}/>);
    } else if (status === 'failed') {
        content = <p>{error}</p>;
    }

    return (
            <section>
                <h2>Posts</h2>
                {content}
            </section>
    );
}

export default PostsList