import { cache } from '../../config/Apollo.client.config';
import { davtionStateClient } from '../../constants/client/client.state';
import { GET_DAVTION_STATE } from '../../gql/getDavtionState';

export function CacheWriting() {
	cache.writeQuery({
		query: GET_DAVTION_STATE,
		data: {
			davtionState: davtionStateClient(),
		},
	});
}
