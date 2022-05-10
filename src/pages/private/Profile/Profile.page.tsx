import { useQuery } from '@apollo/client';
import {} from 'react';
import { GET_USER } from '../../../gql/getUser.gql';
import { UserLocalMapper } from '../../../lib/mappers/User.mapper';

function Profile() {
	console.log('~~profile');
	const { data, error } = useQuery(GET_USER);
	const { name, email, image } = UserLocalMapper(data);
	if (error) return <p>Error: {error.message}</p>;

	return (
		<>
			<h1>Profile</h1>
			<img src={image} alt={name} />
			<p>{name}</p>
			<p>{email}</p>
			<section>
				<h2>your all notes</h2>
			</section>
		</>
	);
}

export default Profile;
