import { generalRequest, getRequest } from '../utilities';
import { url, port, entryPoint } from './authserver';

const URL = `http://${url}:${port}/${entryPoint}`;

const resolvers = {
    Query: {
        validateToken: (_, { headers }) => {
            return new Promise((resolve, reject) => {
                generalRequest(`${URL}/validate_token`, 'GET', {
                    'client': headers.client,
                    'uid': headers.uid,
                    'access-token': headers.token
                }, true).then((response) => {
                    let user = response.body.data
                    user['token'] = response.headers['access-token']
                    user['type'] = response.headers['token-type']
                    user['client'] = response.headers['client']
                    delete user['provider']
                    delete user['uid']
                    delete user['allow_password_change']
                    resolve(user)
                })
            })
        },
        userById: (_, { idUser }) =>
            generalRequest(`http://${url}:${port}/users/${idUser}`, 'GET'),
    },

    Mutation: {
        createSession: (_, { session }) => {
            return new Promise((resolve, reject) => {
                generalRequest(`${URL}/sign_in`, 'POST', session, true).then(
                    (response) => {
                        console.log("Server response => ", response);
                        let user = response.body.data
                        user['token'] = response.headers['access-token']
                        user['uid'] = response.headers['uid']
                        user['type'] = response.headers['token-type']
                        user['client'] = response.headers['client']
                        resolve(user);
                    }
                )
            })
        },
        createUser: (_, { user }) => {
            return new Promise((resolve, reject) => {
                generalRequest(`${URL}`, 'POST', user, true).then(
                    (response) => {
                        console.log("Server response => ", response);
                        let user = response.body.data
                        user['token'] = response.headers['access-token']
                        user['uid'] = response.headers['uid']
                        user['type'] = response.headers['token-type']
                        user['client'] = response.headers['client']
                        resolve(user);
                    }
                )
            })
        },
        exitSession: (_, { session }) => {
            return new Promise((resolve, reject) => {
                generalRequest(`${URL}/sign_out`, 'POST', session, true).then(
                    (response) => {
                        console.log("Server response => ", response);
                        let user = response.body.data
                        user['token'] = response.headers['access-token']
                        user['uid'] = response.headers['uid']
                        user['type'] = response.headers['token-type']
                        user['client'] = response.headers['client']
                        resolve(user);
                    }
                )
            })
        }
    }
};


export default resolvers;