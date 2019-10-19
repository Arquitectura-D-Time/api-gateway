export const calificacionesTypeDef = `
type Calificacion {
    idcalifico: Int!
    idcalificado: Int!
    calificacion: Int!
}

input CalificacionInput {
    idcalifico: Int!
    idcalificado: Int!
    calificacion: Int!
}

input CalificacionInput2 {
    calificacion: Int!
}

`;

export const calificacionesQueries = `
    getCalificaciones: [Calificacion]!
    calificacionById(idcalifico: Int!, idcalificado: Int!): Calificacion!
`;

export const calificacionesMutations = `
    createCalificacion(calificacion: CalificacionInput!): Calificacion!
    deleteCalificacion(idcalifico: Int!, idcalificado: Int!): Int
    updateCalificacion(idcalifico: Int!, idcalificado: Int!, calificacion: CalificacionInput2!): Calificacion!
`;