import { ApolloClient, gql } from '@apollo/client';

import { cache } from './cache';

const endpoint = {
    dev: 'http://localhost:8080/query'
};

export const typeDefs = gql`
    extend type Query {
        isLoggedIn: Boolean!
    }
`;

const client = new ApolloClient({
    uri: endpoint.dev,
    cache: cache,
    headers: {
        authorization: process.browser ? sessionStorage.getItem('token') || '' : ''
    },
    typeDefs
});

export default client;
