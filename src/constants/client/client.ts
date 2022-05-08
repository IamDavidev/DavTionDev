import {
	ApolloClient,
	InMemoryCache,
	makeVar,
	NormalizedCacheObject,
	ReactiveVar,
} from '@apollo/client';

import { taskStateClient, userStateClient } from './state';

const cartItemsVar: ReactiveVar<never[]> = makeVar([]);

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
					cartItems: {
						read() {
							return cartItemsVar();
						},
					},
				},
			},
		},
	}),
	connectToDevTools: true,
});
