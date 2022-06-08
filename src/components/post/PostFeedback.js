import { useDispatch } from "react-redux";
import { feedbackAdded } from '../../features/post/postSlice';

const feedbackSymbols = {
    thumbsUp: '👍',
    wow: '😮',
    heart: '❤️',
    rocket: '🚀',
    coffee: '☕'
}

const PostFeedback = ({ post }) => {
    const dispatch = useDispatch();

    const feedbackBtns = Object.entries(feedbackSymbols).map(([name, symbol]) => {
        return (
            <button
                key={name}
                type="button"
                className="feedbackBtn"
                onClick={() =>
                    dispatch(feedbackAdded({ postId: post.id, feedback: name }))
                }
            >
                {symbol} {post.feedback[name]}
            </button>
        )
    });

    return <div>{feedbackBtns}</div>;
}

export default PostFeedback;