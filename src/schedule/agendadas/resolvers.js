import { generalRequest, getRequest } from '../../utilities';
import { url, port, entryPoint } from './server';

const URL = `http://${url}:${port}/${entryPoint}`;

const resolvers = {
	Query: {
		allAgendadas: (_) =>
			getRequest(URL, ''),
		agendadasByTutor: (_, { IDtutoria }) =>
			generalRequest(`${URL}/${IDtutoria}`, 'GET'),
		agendadasByAlumno: (_, { IDalumno }) =>
			generalRequest(`${URL}/${IDalumno}`, 'GET'),
	},
	Mutation: {
		createAgendadas: (_, { agendadas }) =>
			generalRequest(`${URL}`, 'POST', agendadas),
		updateAgendadas: (_, { IDtutoria, IDalumno, agendadas }) =>
			generalRequest(`${URL}/${IDtutoria}/${IDalumno}`, 'PUT', agendadas),
		deleteAgendadas: (_, { IDtutoria, IDalumno}) =>
			generalRequest(`${URL}/${IDtutoria}/${IDalumno}`, 'DELETE')
	}
};

export default resolvers;