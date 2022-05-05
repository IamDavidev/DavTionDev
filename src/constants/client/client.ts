import { ApolloClient, InMemoryCache } from '@apollo/client';
import { taskStateVar, userStateClient } from './state';

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
					taskDev: {
						read() {
							return taskStateVar();
						},
					},
				},
			},
		},
	}),
	connectToDevTools: true,
});
