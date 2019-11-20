import { generalRequest, getRequest } from '../../utilities';
import { url, port, entryPoint } from './ldapserver';

const URL = `http://${url}:${port}/${entryPoint}`;

const resolvers = {
    Mutation: {
        createSessionLDAP: (_, { session }) => 
                generalRequest(`${URL}`, 'POST', session)
        }
    }

export default resolvers;