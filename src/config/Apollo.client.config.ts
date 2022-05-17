import {
	ApolloClient,
	InMemoryCache,
	NormalizedCacheObject,
} from '@apollo/client';

import {
	taskStateClient,
	userStateClient,
} from '../constants/client/client.state';

export const cache = new InMemoryCache({
	typePolicies: {
		Query: {
			fields: {
				UserClient: {
					read() {
						return userStateClient();
					},
				},
				TasksClient: {
					read() {
						return taskStateClient();
					},
				},
			},
		},
	},
});

export const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
	uri: 'http://localhost:4000/graphql',
	cache,
	connectToDevTools: true,
});
