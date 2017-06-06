import React from 'react';
import blogs from '../data/blog'

const Blog = ({match}) => {
  const blog = blogs.find(item =>  match.params.id == item.id)

  return (
    <div>
      <h3>{blog.title}</h3>
      <article>
        {blog.blog}
      </article>
    </div>
  )
};


export default Blog;
