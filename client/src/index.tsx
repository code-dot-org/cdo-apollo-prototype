import {
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject,
  ApolloProvider
} from '@apollo/client';
import React from 'react';
import ReactDOM from 'react-dom';
import ScriptOverview from './components/ScriptOverview';
import injectStyles from './styles';

// Initialize ApolloClient
const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
  cache: new InMemoryCache(),
  uri: 'http://localhost:4000/',
});

injectStyles();

// Pass the ApolloClient instance to the ApolloProvider component
ReactDOM.render(
  <ApolloProvider client={client}>
    <ScriptOverview />
  </ApolloProvider>,
  document.getElementById('root')
);

