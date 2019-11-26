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
		createNotification: (_, { notification }) =>
			generalRequest(`${URL}/create`, 'POST', notification),
	}
};

export default resolvers;
