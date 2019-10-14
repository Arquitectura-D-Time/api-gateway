export const agendadasTypeDef = `
type Agendadas {
	IDtutoria:      Int!
	IDalumno:       Int! 
	NombreAlumno:  	String! 
}

input AgendadasInput {
	IDtutoria:      Int!
	IDalumno:       Int! 
	NombreAlumno:  	String!
}

input AgendadasInput2 {
	NombreAlumno:  	String!
}`;



export const agendadasQueries = `
    allAgendadas: [Agendadas]!
    agendadasByTutoria(IDtutoria: Int!): [Agendadas!]
    agendadasByAlumno(IDalumno: Int!): [Agendadas!]
`;

export const agendadasMutations = `
    createAgendadas(agendadas: AgendadasInput!): Agendadas!
    updateAgendadas(IDtutoria: Int!, IDalumno: Int!, agendadas: AgendadasInput2!): Agendadas!
    deleteAgendadas(IDtutoria: Int!, IDalumno: Int!): Int
`;