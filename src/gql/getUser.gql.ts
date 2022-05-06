import { gql } from '@apollo/client';

export const GET_USER = gql`
	query GetStateDavtion {
		UserClient @client {
			user {
				name
				email
				_token
				photoURL
				lastLogin
				_uid
			}
			isAuthenticated
		}
	}
`;
