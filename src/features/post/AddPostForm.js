import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { postAdded } from './postSlice';
import { selectAllUsers } from '../user/userSlice';

const AddPostForm = () => {
    const dispatch = useDispatch();

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const [userId, setUserId] = useState('');

    const users = useSelector(selectAllUsers);

    const onTitleChanged = e => setTitle(e.target.value);
    const onContentChanged = e => setContent(e.target.value);

    const onUserChanged = e => setUserId(e.target.value);

    const onSavePostClicked = () => {
        if (title && content) {
            dispatch(postAdded(title, content, userId));

            setTitle('');
            setContent('');
        }
    }

    const isValid = Boolean(title) && Boolean(content) && Boolean(userId);

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

export default AddPostForm;