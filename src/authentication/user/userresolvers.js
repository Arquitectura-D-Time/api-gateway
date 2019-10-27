import { generalRequest, getRequest } from '../../utilities';
import { url, port, entryPoint } from './userserver';

const URL = `http://${url}:${port}/${entryPoint}`;

const resolvers = {
    Query: {
        userById: (_, { idUser }) =>
            generalRequest(`http://${url}:${port}/users/${idUser}`, 'GET'),
    }
};

export default resolvers;