export const sessionsTypeDefLDAP = `
input SessionInputLDAP {
    email: String!
    password: String!
}
type sessionDataLDAP {
    email: String!
    answer: String!
}
`;
export const sessionsMutationsLDAP = `
    createSessionLDAP(session: SessionInputLDAP!): sessionDataLDAP!
`;