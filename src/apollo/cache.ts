import { gql, InMemoryCache, makeVar } from '@apollo/client';

export const cache = new InMemoryCache({
    typePolicies: {
        Query: {
            fields: {
                isLoggedIn: {
                    // Apollo Client calls a field's read function whenever that field is queried
                    read() {
                        return isLoggedInVar();
                    }
                }
            }
        }
    }
});

export const isLoggedInVar = makeVar<boolean>(
    !!(process.browser ? sessionStorage.getItem('token') : false)
);

export const IS_LOGGED_IN = gql`
    query IsUserLoggedIn {
        isLoggedIn @client
    }
`;

export type IsUserLoggedIn = {
    __typename?: 'IsUserLoggedIn';
    isLoggedIn: boolean;
};
