import React from 'react';
import docs from './../data/docs.js'

const SummaryDoc = ({match}) => {
  let doc = docs.find(s => s.id == match.params.summary)
  console.log(doc)
  if (doc) {
    return (<div>
      <h3>{doc.title}</h3>
      {doc.description}
    </div>)
  } else {
    return (<div>
      Sorry, Document not found!
    </div>)
  }
}



export default SummaryDoc;
