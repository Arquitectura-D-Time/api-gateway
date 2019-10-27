import { generalRequest, getRequest } from '../utilities';
import { url, port, entryPoint } from './server';

const URL = `http://${url}:${port}/${entryPoint}`;


const resolvers = {
	Query: {
		allTutorias: (_) =>
			getRequest(URL, ''),
		getTutoria: (_, {id}) =>
			generalRequest(`${URL}/${id}`, 'GET'),
		//Aun no funciona correctamente
		getTutoriaByTutor: (_, {idtutor}) =>
			generalRequest(`${URL}/${idtutor}`, 'GET')
		
	},
	Mutation: {
		createTutoria: (_, { tutoria }) =>
			generalRequest(`${URL}/`, 'POST', tutoria),
		updateTutoria: (_, { id,tutoria }) =>
			generalRequest(`${URL}/${id}`, 'PUT', tutoria),
		deleteTutoria: (_, {id}) =>
			generalRequest(`${URL}/${id}`, 'DELETE'),
		
	}
};

export default resolvers;