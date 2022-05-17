import { gql } from '@apollo/client';

export const GET_ALL_TASKS = gql`
	query {
		getAllTasks {
			title
			description
			status
			priority
		}
	}
`;
