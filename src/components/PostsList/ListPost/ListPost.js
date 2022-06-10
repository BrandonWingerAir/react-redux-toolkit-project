import ListPostUser from './ListPostUser';
import ListPostDate from './ListPostDate';
import ListPostFeedback from './ListPostFeedback';

const ListPost = ({ post }) => {
  return (
    <article>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
        <p className="postInfo">
            <ListPostUser userId={post.userId}/>
            <ListPostDate timestamp={post.date}/>
        </p>
        <ListPostFeedback post={post}/>
    </article>
  )
}

export default ListPost