import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { addNewPost } from '../features/post/postSlice';
import { selectAllUsers } from '../features/user/userSlice';

const PostNew = () => {
    const dispatch = useDispatch();

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [userId, setUserId] = useState('');

    const [requestStatus, setRequestStatus] = useState('idle');

    const users = useSelector(selectAllUsers);

    const onTitleChanged = e => setTitle(e.target.value);
    const onContentChanged = e => setContent(e.target.value);
    const onUserChanged = e => setUserId(e.target.value);

    const isValid = [title, content, userId].every(Boolean) && requestStatus === 'idle';

    const onSavePostClicked = () => {
        if (isValid) {
            try {
                setRequestStatus('pending');
                dispatch(addNewPost({ title, body: content, userId })).unwrap();

                setTitle('');
                setContent('');
                setUserId('');
            } catch (err) {
                console.error('Failed to save post.', err);
            } finally {
                setRequestStatus('idle');
            }
        }
    }

    const userOptions = users.map(user => (
        <option key={user.id} value={user.id}>
            {user.name}
        </option>
    ));

    return (
        <section>
            <h2>Add New</h2>
            <form>
                <label htmlFor="postTitle">Title:</label>
                <input
                    type="text"
                    id="postTitle"
                    name="postTitle"
                    value={title}
                    onChange={onTitleChanged}
                />

                <label htmlFor="postUser">User:</label>
                <select id="postUser" value={userId} onChange={onUserChanged}>
                    <option value="">Select</option>
                    {userOptions}
                </select>

                <label htmlFor="postContent">Content:</label>
                <input
                    type="text"
                    id="postContent"
                    name="postContent"
                    value={content}
                    onChange={onContentChanged}
                />

                <button 
                    type="button"
                    onClick={onSavePostClicked}
                    disabled={!isValid}
                >
                    Save
                </button>
            </form>
        </section>
    )
}

export default PostNew;