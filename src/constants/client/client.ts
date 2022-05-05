import { ApolloClient, InMemoryCache } from '@apollo/client';
import { userState } from './state';

export const client = new ApolloClient({
	uri: 'http://localhost:4000/graphql',
	cache: new InMemoryCache({
		typePolicies: {
			Query: {
				fields: {
					user: {
						read() {
							return userState;
						},
					},
					tasks: {
						read() {
							return null;
						},
					},
				},
			},
		},
	}),
	connectToDevTools: true,
});
