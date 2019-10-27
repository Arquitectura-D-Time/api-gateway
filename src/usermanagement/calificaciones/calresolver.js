import { generalRequest, getRequest } from '../../utilities';
import { url, port, entryPoint } from './calserver';

const URL = `http://${url}:${port}/${entryPoint}`;

const resolvers = {
	Query: {
		getCalificaciones: (_) =>
			getRequest(URL, ''),
        calificacionById: (_, { idcalifico, idcalificado }) =>
			generalRequest(`${URL}/${idcalifico}/${idcalificado}`, 'GET'),
	},
	Mutation: {
		createCalificacion: (_, { calificacion }) =>
			generalRequest(`${URL}`, 'POST', calificacion),
		updateCalificacion: (_, { idcalifico, idcalificado, calificacion }) =>
			generalRequest(`${URL}/${idcalifico}/${idcalificado}`, 'PUT', calificacion),
		deleteCalificacion: (_, { idcalifico, idcalificado }) =>
			generalRequest(`${URL}/${idcalifico}/${idcalificado}`, 'DELETE')
	}
};

export default resolvers;
