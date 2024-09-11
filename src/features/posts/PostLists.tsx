// import { useDispatch, useSelector } from 'react-redux';
// import { selectPosts, selectDatas } from '../../store/selectors';
// import React from 'react';

// export const PostsList = () => {
//     const dispatch = useDispatch();
//     const posts = useSelector(selectPosts);
//     const datas = useSelector(selectDatas);

//     const renderedPosts = posts.map(posts => (
//         <article className="post-excerpt" key={posts.id}>
//           <h3>{posts.title}</h3>
//           <p className="post-content">{posts.content.substring(0, 100)}</p>
//         </article>
//       ));

//       return (
//         <section className="posts-list">
//           <h2>Posts</h2>
//           {renderedPosts}
//         </section>
//       )
// }