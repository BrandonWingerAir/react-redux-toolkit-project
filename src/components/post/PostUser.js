import { useSelector } from "react-redux";
import { selectAllUsers } from '../../features/user/userSlice';

const PostUser = ({ userId }) => {
    const users = useSelector(selectAllUsers)

    const user = users.find(user => user.id === userId);

    return <span>User: {user ? user.name : 'Unknown'}</span>;
}

export default PostUser;