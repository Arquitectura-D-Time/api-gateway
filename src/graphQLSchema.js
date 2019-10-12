import merge from 'lodash.merge';
import GraphQLJSON from 'graphql-type-json';
import { makeExecutableSchema } from 'graphql-tools';

import { mergeSchemas } from './utilities';

import {
	usersMutations,
	usersQueries,
	usersTypeDef
} from './schedule/horario/typeDefs';

import {
	usersMutations,
	usersQueries,
	usersTypeDef
} from './schedule/agendadas/typeDefs';

import usersResolvers from './schedule/horario/resolvers';
import usersResolvers from './schedule/agendadas/resolvers';

// merge the typeDefs
const mergedTypeDefs = mergeSchemas(
	[
		'scalar JSON',
		usersTypeDef
	],
	[
		usersQueries
	],
	[
		usersMutations
	]
);

// Generate the schema object from your types definition.
export default makeExecutableSchema({
	typeDefs: mergedTypeDefs,
	resolvers: merge(
		{ JSON: GraphQLJSON }, // allows scalar JSON
		usersResolvers
	)
});
