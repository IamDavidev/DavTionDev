import { gql } from '@apollo/client';

export const GET_TASKS = gql`
	query getTasks {
		TasksClient @client
	}
`;
