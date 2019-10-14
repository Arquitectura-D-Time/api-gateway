import { generalRequest, getRequest } from '../../utilities';
import { url, port, entryPoint } from './comserver';

const URL = `http://${url}:${port}/${entryPoint}`;

const resolvers = {
	Query: {
		getCalificaciones: (_) =>
			getRequest(URL, ''),
		calificacionById: (_, { idcomento, idcomentado }) =>
			generalRequest(`${URL}/${idcalifico}/${idcalificado}`, 'GET'),
	},
	Mutation: {
		createComentario: (_, { comentario }) =>
			generalRequest(`${URL}`, 'POST', comentario),
		updateComentario: (_, { idcomento, idcomentado, comentario }) =>
			generalRequest(`${URL}/${idcomento}/${idcomentado}`, 'PUT', comentario),
		deleteComentario: (_, { idcomento, idcomentado }) =>
			generalRequest(`${URL}/${idcomento}/${idcomentado}`, 'DELETE')
	}
};

export default resolvers;
