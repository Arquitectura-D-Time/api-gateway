export const horarioTypeDef = `
type Horario {
	IDtutoria:      Int!
	IDtutor:        Int! 
	NombreMateria:  String! 
	Fecha:          String! 
	HoraInicio:     String! 
	HoraFinal:      String!
    Cupos:          Int! 
}

input HorarioInput {
	IDtutoria:      Int!
	IDtutor:        Int! 
	NombreMateria:  String! 
	Fecha:          String! 
	HoraInicio:     String! 
	HoraFinal:      String!
    Cupos:          Int!
}

input HorarioInput2 {
	Fecha:          String! 
	HoraInicio:     String! 
	HoraFinal:      String!
    Cupos:          Int!
}
`;

export const horarioQueries = `
    allHorarios: [Horario]!
	horarioById(IDtutoria: Int!): [Horario]!
	horarioByTutor(IDtutor: Int!): [Horario]!
    horarioByNombre(NombreMateria: String!): [Horario]!
    horarioByFecha(Fecha: String!): [Horario]!
    horarioByHora(HoraInicio: String!): [Horario]!
`;

export const horarioMutations = `
    createHorario(horario: HorarioInput!): Horario!
    updateHorario(IDtutoria: Int!, IDtutor: Int!, horario: HorarioInput2!): Horario!
    deleteHorario(IDtutoria: Int!, IDtutor: Int!): Int
`;