export const comentariosTypeDef = `
type Comentario {
    idcomento: Int!
    idcomentado: Int!
    comentario: String!
    fecha: String!
    hora: String!
}

input ComentarioInput {
    idcomento: Int!
    idcomentado: Int!
    comentario: String!
    fecha: String!
    hora: String!
}

input ComentarioInput2 {
    comentario: String!
    fecha: String!
    hora: String!
}

`;

export const comentariosQueries = `
    getComentarios: [Comentario]!
    comentarioById(idcomento: Int!, idcomentado: Int!): Comentario!
`;

export const comentariosMutations = `
    createComentario(comentario: ComentarioInput!): Comentario!
    deleteComentario(idcomento: Int!, idcomentado: Int!): Int
    updateComentario(idcomento: Int!, idcomentado: Int!, comentario: ComentarioInput2!): Comentario!
`;