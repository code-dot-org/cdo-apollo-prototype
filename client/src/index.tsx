import {
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject,
  ApolloProvider,
} from '@apollo/client';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Store } from 'redux';
import Pages from './pages';
import injectStyles from './styles';
import ManageStudents from './pages/manage-students';

// Initialize ApolloClient
const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
  cache: new InMemoryCache(),
  uri: 'http://localhost:4000/',
});

injectStyles();

// export const App = (
//   <ApolloProvider client={client}>
//     {/* <h1>Hello</h1> */}
//     <ManageStudents sectionId={'1'} />
//   </ApolloProvider>
// );

// ReactDOM.render(App, document.getElementById('root'));

// Pass the ApolloClient instance to the ApolloProvider component
export function render(
  container: string,
  store: Store,
  Wrapper: React.ComponentType
) {
  ReactDOM.render(
    <ApolloProvider client={client}>
      <Provider store={store}>
        <Wrapper>
          <ManageStudents sectionId={'1'} />
        </Wrapper>
      </Provider>
    </ApolloProvider>,
    document.getElementById(container)
  );
}
