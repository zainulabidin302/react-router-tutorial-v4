import React from 'react';
import { NavLink } from 'react-router-dom';
import blogs from '../data/blog'

const BlogList = ({match}) => (
  <div>
    <h3>Blog Listing </h3>
    {
      blogs.map(blog => {
        return <h4><NavLink to={`${match.path}/${blog.id}`}> {blog.title}</NavLink></h4>
      })
    }

  </div>
);


export default BlogList;
