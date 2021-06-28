import React, { Fragment } from 'react';
import { Router } from '@reach/router';

import Assessment from './assessment';
import Script from './script';
import ManageStudents from './manage-students'
import { PageContainer } from '../components';

export default function Pages() {
  return (
    <Fragment>
      <PageContainer>
        <Router primary={false} component={Fragment}>
          <ManageStudents path='/' sectionId={'1'} />
          <ManageStudents path='section/:sectionId'/>
          <Script path='script/:scriptId' />
          <Assessment path='assessment/:assessmentId' />
        </Router>
      </PageContainer>
    </Fragment>
  );
}
