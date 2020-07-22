import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { PYROG_API_URL, AUTH_TOKEN_KEY } from '../constants/constants';

const cache = new InMemoryCache();
const link = new HttpLink({
    uri: PYROG_API_URL,
    headers: {
        authorization: AUTH_TOKEN_KEY
    }
});

const client = new ApolloClient({cache, link});
export default client;