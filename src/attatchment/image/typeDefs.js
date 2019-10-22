export const imagesTypeDef = `
type images {
	filename:      String!
	id_owner:       Int! 
    path:  	String! 
    originalname: String!
    mimetype: String!
    size: Int!
    created_at: Date!
}

input ImagesInput {
	filename:      String!
	id_owner:       Int! 
    path:  	String! 
    originalname: String!
    mimetype: String!
    size: Int!
    created_at: Date!
}`



export const imagesQueries = `
    imageById: [images]!
`;

export const imagesMutations = `
`;