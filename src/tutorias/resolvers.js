import { generalRequest, getRequest } from '../utilities';
import { url, port, entryPoint } from './server';

const URL = `http://${url}:${port}/${entryPoint}`;


const resolvers = {
	Query: {
		allTutorias: (_) =>
			getRequest(URL, ''),
		
	},
	Mutation: {
		
	}
};

export default resolvers;