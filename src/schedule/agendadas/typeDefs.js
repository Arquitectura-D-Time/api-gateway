export const agendadasTypeDef = `
type Agendadas {
	IDtutoria:      Int!
	IDalumno:       Int! 
	NombreAlumno:  	String! 
}

input AgendasInput {
	IDtutoria:      Int!
	IDalumno:       Int! 
	NombreAlumno:  	String!
}

input AgendasInput2 {
	NombreAlumno:  	String!
}`;



export const agendadasQueries = `
    allAgendadas: [Agendadas]!
    agendadasByTutoria(IDtutoria: Int!): Agendadas!
    agendadasByAlumno(IDalumno: Int!): Agendadas!
`;

export const agendadasMutations = `
    createAgendadas(agendadas: AgendadasInput!): Agendadas!
    updateAgendadas(IDtutoria: Int!, IDalumno: Int!, agendadas: AgendasInput2!): Agendadas!
    deleteAgendadas(IDtutoria: Int!, IDalumno: Int!): Int
`;