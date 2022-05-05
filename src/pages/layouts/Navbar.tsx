import { useQuery } from '@apollo/client';
import { GET_USER } from '../../gql/getUser.gql';

const Navbar = () => {
	const { data, loading } = useQuery(GET_USER);
	if (loading) return <p>loading ...</p>;

	console.log(data);

	return <div>navbar</div>;
};

export default Navbar;
