import React from 'react';
import docs from './../data/docs.js'
import {NavLink} from 'react-router-dom'
const DocsSidebar = ({match}) => {

  const docs_html = docs.map(doc => {
    return (
    <li>
      <h4>
        <NavLink to={`${match.path}/${doc.id}`} > {doc.title}
        </NavLink>
      </h4>
      <ul>
        {doc.list.map(
            point => <li><NavLink to={`${match.path}/${doc.id}/${point.id}`}> {point.title} </NavLink></li>
        )}
      </ul>
    </li>
    )
  })


  return (
  <div>
    <ul>
      {docs_html}
    </ul>
  </div>
  )
}


export default DocsSidebar;
