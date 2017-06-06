import React from 'react';
import DocsSidebar from './DocsSidebar'
import DocsBody from './DocsBody'
import './Docs.css'

import { Route } from 'react-router-dom';
const Docs = ({match}) => (
  <div className="Docs-container">
    <div>
      <h3>Documentation</h3>
    </div>
    <div className="side-bar">
      <Route path={`${match.path}`} component={DocsSidebar} />
    </div>
    <div className="docs-details">
      <Route path={`${match.path}`} component={DocsBody} />
    </div>
  </div>
);


export default Docs;
