import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

const hostname = window && window.location && window.location.hostname;
var httpLink = null;
if(hostname === 'graphql-analyzer-demo-client.herokuapp.com'){
  httpLink = new HttpLink({ uri: 'https://graphql-analyzer-demo.herokuapp.com/graphql'})
} else {
  httpLink = new HttpLink({ uri: 'http://localhost:3001/graphql' })
}

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
})

ReactDOM.render(
  <html>
    <head>
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous"/>
    </head>
    <body>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </body>
  </html>
  , document.getElementById('root')
);
registerServiceWorker();
