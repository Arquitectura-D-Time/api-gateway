import { generalRequest, getRequest } from '../../utilities';
import { url, port, entryPoint } from './server';

const URL = `http://${url}:${port}/${entryPoint}`;

const resolvers = {
	Query: {
		allHorarios: (_) =>
			getRequest(URL, ''),
		horarioById: (_, { IDtutoria }) =>
			generalRequest(`${URL}/id/${IDtutoria}`, 'GET'),
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
		updateHorario: (_, { IDtutoria, horario }) =>
			generalRequest(`${URL}/${IDtutoria}`, 'PUT', horario),
		deleteHorario: (_, { IDtutoria }) =>
			generalRequest(`${URL}/${IDtutoria}`, 'DELETE')
	}
};

export default resolvers;