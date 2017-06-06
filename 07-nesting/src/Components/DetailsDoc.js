import React from 'react';
import RelatedLinks from './RelatedLinks';
import docs from './../data/docs.js'

const DetailsDoc = ({match}) => {

  let doc = docs.find(s => s.id == match.params.summary)
  let a;

  if (doc) {
    a = doc.list.find(d => d.id == match.params.details)
  }
  if (a) {
    return (<div>
      <h4>{doc.title} > {a.title} </h4>
      {a.description}
      <RelatedLinks links={a.related} />
    </div>)
  } else {
    return (<div>
      Sorry, Document not found!
    </div>)
  }
}



export default DetailsDoc;
