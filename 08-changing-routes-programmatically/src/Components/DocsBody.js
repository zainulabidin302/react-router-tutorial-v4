import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import SummaryDoc from './SummaryDoc';
import DetailsDoc from './DetailsDoc';

import docs from '../data/docs.js'

const DocsBody = ({match}) => (
  <div>
    <Redirect to={`${match.path}/${docs[0].id}`} />
    <Route exact path={`${match.path}/:summary`} component={SummaryDoc} />
    <Route exact path={`${match.path}/:summary/:details`} component={DetailsDoc} />
  </div>
);


export default DocsBody;
