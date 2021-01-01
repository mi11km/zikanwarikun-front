import { ApolloClient } from '@apollo/client';

import { cache } from './cache';

const endpoint = {
    dev: 'http://localhost:8080/query'
};

const client = new ApolloClient({
    uri: endpoint.dev,
    cache: cache
});

export default client;
