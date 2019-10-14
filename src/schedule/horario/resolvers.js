import { generalRequest, getRequest } from '../../utilities';
import { url, port, entryPoint } from './server';

const URL = `http://${url}:${port}/${entryPoint}`;

const resolvers = {
	Query: {
		allHorarios: (_) =>
			getRequest(URL, ''),
		horarioById: (_, { IDtutoria }) =>
			generalRequest(`${URL}/id/${IDtutoria}`, 'GET'),
		horarioByTutor: (_, { IDtutor }) =>
			generalRequest(`${URL}/idtutor/${IDtutor}`, 'GET'),
/*
		horarioByNombre: (_, { NombreMateria }) =>
			generalRequest(`${URL}/${NombreMateria}`, 'GET'),
		horarioByFecha: (_, { Fecha }) =>
			generalRequest(`${URL}/${Fecha}`, 'GET'),
		horarioByHora: (_, { HoraInicio }) =>
			generalRequest(`${URL}/${HoraInicio}`, 'GET'),
*/
	},
	Mutation: {
		createHorario: (_, { horario }) =>
			generalRequest(`${URL}`, 'POST', horario),
		updateHorario: (_, { IDtutoria, IDtutor, horario }) =>
			generalRequest(`${URL}/${IDtutoria}/${IDtutor}`, 'PUT', horario),
		deleteHorario: (_, { IDtutoria, IDtutor }) =>
			generalRequest(`${URL}/${IDtutoria}/${IDtutor}`, 'DELETE')
	}
};

export default resolvers;