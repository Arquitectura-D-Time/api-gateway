export const sessionsTypeDef = `
type User {
    id: Int!
    email: String!
    provider: String!
    name: String!
    nickname: String!
    image: String
}
input SessionInput {
    email: String!
    password: String!
}
input UserInput {
    email : String!,
    name: String!,
	nickname: String!,	
	password : String!,
	password_confirmation: String!
}
input Headers {
    token: String!
    client: String!
    uid: String!
}
type sessionData {
    id: Int!
    email: String!
    name: String!
    nickname: String!
    image: String
    token: String!
    type: String!
    client: String!
    uid: String!
}
`;

export const sessionQueries = `
    validateToken(headers: Headers!): sessionData!
`;

export const sessionsMutations = `
    createSession(session: SessionInput!): sessionData!
    createSessionLDAP(session: SessionInput!): sessionData!
    createUser(user: UserInput!): sessionData!
`;