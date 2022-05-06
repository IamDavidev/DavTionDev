import { ApolloClient, InMemoryCache, makeVar } from '@apollo/client';
import { taskStateClient, userStateClient } from './state';

const cartItemsVar = makeVar([]);

export const client = new ApolloClient({
	cache: new InMemoryCache({
		typePolicies: {
			Query: {
				fields: {
					userDev: {
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
