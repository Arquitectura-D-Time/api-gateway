export const estadoCuentasTypeDef = `
type EstadoCuenta {
    id: Int!
    estado: Int!
    fechainicio: String!
    fechafinal: String!
}

input EstadoCuentaInput {
    id: Int!
    estado: Int!
    fechainicio: String!
    fechafinal: String!
}

input EstadoCuentaInput2 {
    estado: Int!
    fechainicio: String!
    fechafinal: String!
}
`;

export const estadoCuentasQueries = `
    getEstadoCuentas: [EstadoCuenta]!
    EstadoCuentaById(id: Int!): EstadoCuenta!
`;

export const estadoCuentasMutations = `
    createEstadoCuenta(EstadoCuenta: EstadoCuentaInput!): EstadoCuenta!
    deleteEstadoCuenta(id: Int!): Int
    updateEstadoCuenta(id: Int!, EstadoCuenta: EstadoCuentaInput2!): EstadoCuenta!
`;