export const imagesTypeDef = `
type images {
	filename:      String!
	id_owner:       Int! 
    path:  	String! 
    originalname: String!
    mimetype: String!
    size: Int!
    created_at: String!
}

type imagesurl {
	urlimg:      String!
}

input ImagesInput {
	filename:      String!
	id_owner:       Int! 
    path:  	String! 
    originalname: String!
    mimetype: String!
    size: Int!
    created_at: String!
}`



export const imagesQueries = `
    imageById(IDalumno: Int!): imagesurl!
`;

export const imagesMutations = `
`;