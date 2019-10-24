export const userTypeDef = `
type basicUserInfo {
    name: String!
    nickname: String!
    email: String!
}
`;

export const userQueries = `
    userById(idUser: Int!): basicUserInfo!
`;