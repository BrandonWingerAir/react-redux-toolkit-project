import { useSelector } from "react-redux";
import { selectAllPosts } from '../features/post/postSlice';
import PostUser from './post/PostUser';
import PostDate from './post/PostDate';
import PostFeedback from './post/PostFeedback';

const PostsList = () => {
  const posts = useSelector(selectAllPosts);

  const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date));

  const renderedPosts = orderedPosts.map(post => (
      <article key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.content.substring(0, 100)}</p>
          <p className="postInfo">
              <PostUser userId={post.userId}/>
              <PostDate timestamp={post.date}/>
          </p>
          <PostFeedback post={post}/>
      </article>
  ));

  return (
      <section>
          <h2>Posts</h2>
          {renderedPosts}
      </section>
  );
}

export default PostsList