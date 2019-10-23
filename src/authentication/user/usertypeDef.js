export const userTypeDef = `
type basicUserInfo {
    name: String!
    nickname: String!
    image: String!
}
`;

export const userQueries = `
    userById(idUser: Int!): basicUserInfo!
`;