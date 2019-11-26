import { generalRequest, getRequest } from '../utilities';
import { url, port, entryPoint } from './server';

const URL = `http://${url}:${port}/${entryPoint}`;

const resolvers = {
	Query: {
		test: (_) =>
			getRequest(`${URL}`,'all'),
		getById: (_, { _id }) =>
			generalRequest(`${URL}/${_id}`, 'GET'),
		getByToIdUser: (_, {toUserId}) =>
			generalRequest(`${URL}/toUser/${toUserId}`, 'GET'),
		getByFromIdUser: (_, {fromUserId}) =>
			generalRequest(`${URL}/toUser/${fromUserId}`, 'GET'),
		getBytoUserStatus: (_, {toUserId, status}) =>
			generalRequest(`${URL}/toUserAndStatus/${toUserId, status}`, 'GET'),
		getByfromUserStatus: (_, {fromUserId, status}) =>
			generalRequest(`${URL}/fromUserAndStatus/${fromUserId, status}`, 'GET'),
	},
	Mutation: {
		createNotification: (_, { notifications }) =>
			generalRequest(`${URL}/create`, 'POST', notifications),
	}
};

export default resolvers;
