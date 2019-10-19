import { generalRequest, getRequest } from '../../utilities';
import { url, port, entryPoint } from './ecserver';

const URL = `http://${url}:${port}/${entryPoint}`;

const resolvers = {
	Query: {
		getEstadoCuentas: (_) =>
			getRequest(URL, ''),
        EstadoCuentaById: (_, { id}) =>
			generalRequest(`${URL}/${id}`, 'GET'),
	},
	Mutation: {
		createEstadoCuenta: (_, { estadocuenta }) =>
			generalRequest(`${URL}`, 'POST', estadocuenta),
        updateEstadoCuenta: (_, { id, estadocuenta }) =>
			generalRequest(`${URL}/${id}`, 'PUT', estadocuenta),
		deleteEstadoCuenta: (_, { id}) =>
			generalRequest(`${URL}/${id}`, 'DELETE')
	}
};

export default resolvers;
