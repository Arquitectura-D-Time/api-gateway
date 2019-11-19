export const userTypeDef = `
type basicUserInfo {
    id: Int!
    name: String!
    nickname: String!
    email: String!
}
`;

export const userQueries = `
    userById(idUser: Int!): basicUserInfo!
    userAll: [basicUserInfo]!
`;