import { gql } from '@apollo/client';

export const GET_DAVTION_STATE = gql`
	query getDavtionState {
		davtionState @client {
			isAuthenticated
			modalTask
		}
	}
`;
