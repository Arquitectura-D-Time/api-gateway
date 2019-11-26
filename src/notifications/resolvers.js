import { generalRequest, getRequest } from '../utilities';
import { url, port, entryPoint } from './server';

const URL = `http://${url}:${port}/${entryPoint}`;

const resolvers = {
	Query: {
		test: (_) =>
			getRequest(`${URL}`,'all'),
			//generalRequest(`${URL}/all`, 'GET'),
		userById: (_, { id }) =>
			generalRequest(`${URL}/${id}`, 'GET'),
	},
	Mutation: {
		createNotification: (_, { notifications }) =>
			generalRequest(`${URL}/create`, 'POST', notifications),
	}
};

export default resolvers;
