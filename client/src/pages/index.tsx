import React, { Fragment } from 'react';
import { Router } from '@reach/router';

import Assessment from './assessment';
import Script from './script';
import { PageContainer } from '../components';

export default function Pages() {
  return (
    <Fragment>
      <PageContainer>
        <Router primary={false} component={Fragment}>
          <Script path='script/:scriptId' />
          <Assessment path='assessment/:assessmentId' />
        </Router>
      </PageContainer>
    </Fragment>
  );
}
