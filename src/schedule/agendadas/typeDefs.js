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
}`;

export const agendadasQueries = `
    allAgendadas: [Agendadas]!
    agendadasByTutor(IDtutoria: Int!): Agendadas!
    agendadasByAlumno(IDalumno: Int!): Agendadas!
`;

export const agendadasMutations = `
    createAgendadas(horario: HorarioInput!): Horario!
    updateAgendadas(IDtutoria: Int!, IDalumno: Int!, agendadas: AgendasInput!): Agendadas!
    deleteAgendadas(IDtutoria: Int!, IDalumno: Int!,): Int
`;