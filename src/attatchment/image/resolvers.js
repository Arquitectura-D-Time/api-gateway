import { generalRequest, getRequest } from '../../utilities';
import { url, port, entryPoint } from './server';

const URL = `http://${url}:${port}/${entryPoint}`;

const resolvers = {
	Query: {
		imageById: (_) =>
			getRequest(URL, ''),
	},
	Mutation: {
		
	}
};

export default resolvers;