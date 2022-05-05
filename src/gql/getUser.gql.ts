import { gql } from '@apollo/client';

export const GET_USER = gql`
	query GetStateDavtion {
		userDev @client {
			user {
				name
				email
				_token
			}
			isAuthenticated
		}
	}
`;
