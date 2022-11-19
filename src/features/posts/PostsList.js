import { useSelector } from 'react-redux';
import { selectAllPosts } from './postsSlice';
import PostAuthors from './PostAuthors';
import TimeAgo from './TimeAgo';

const PostsList = () => {
  const posts = useSelector(selectAllPosts)
  const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date))

  // mapping over the posts and creating an article for each one
  // then placing the mapped component into the jsx
  const renderedPosts = orderedPosts.map(post => (
    <article key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content.substring(0, 100)}</p> 
      <p className='postCredit'>
        <PostAuthors userId={post.userId} />
        <TimeAgo timestamp={post.date} />
      </p>
    </article>
  ))
  return (
    <section>
      <h2>Posts</h2>
      {renderedPosts}
    </section>
  )
};

export default PostsList;