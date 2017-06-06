import React from 'react';
import docs from './../data/docs.js'
import _ from 'lodash'
import { NavLink } from 'react-router-dom'
import './RelatedLinks.css'

const RelatedLinks = ({links}) => {
  const path = '/docs'
  console.log(links)
  let links_ouput = docs.map(doc => {
    if (_.includes(links, doc.id)) {
      return <NavLink to={`${path}/${doc.id}`} > {doc.title} </NavLink>
    }

    if (doc.list) {
      let api = doc.list.map(a => {
        console.log( a.id, links, _.includes(links, a.id))
        if (_.includes(links, a.id)) {
          return <div className="link"><NavLink className="related-link" to={`${path}/${doc.id}/${a.id}`} > {a.title} </NavLink></div>
        }
      })
      return api
    }
  })
  console.log(links_ouput)
  return (
    <div>
      <hr />
      <div className="Related-links">

        <div clasName="head">Related Links</div>
        {links_ouput}
      </div>
    </div>
  )
}

export default RelatedLinks;
