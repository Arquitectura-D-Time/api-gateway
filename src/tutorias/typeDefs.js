export const tutoriaTypeDef = `
type Tutoria {
	id:          Int!
	materia:     String! 
    descripcion: String
    cupos:       Int! 
	idtutor:     Int! 
	idtoken:     String
}

input TutoriaInput {
    materia:     String! 
    descripcion: String
    cupos:       Int! 
	idtutor:     Int! 
	idtoken:     String 
	
}`;

export const tutoriaQueries = `
    allTutorias: [Tutoria]!
    getTutoria(id:Int!):Tutoria!
    getTutoriaByTutor(idtutor:Int!):[Tutoria]!
`;

export const tutoriaMutations = `
    createTutoria(tutoria: TutoriaInput!): Tutoria!
    updateTutoria(id: Int!, tutoria: TutoriaInput!): Tutoria!
    deleteTutoria(id: Int!): Int
    
    
`;