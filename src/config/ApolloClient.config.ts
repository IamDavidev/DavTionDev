import {
	ApolloClient,
	InMemoryCache,
	NormalizedCacheObject,
} from '@apollo/client';

import { taskStateClient, userStateClient } from '../constants/client/state';

export const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
	cache: new InMemoryCache({
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
	}),
	connectToDevTools: true,
});
