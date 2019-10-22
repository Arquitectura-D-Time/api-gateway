import merge from 'lodash.merge';
import GraphQLJSON from 'graphql-type-json';
import { makeExecutableSchema } from 'graphql-tools';

import { mergeSchemas } from './utilities';

import {
	horarioMutations,
	horarioQueries,
	horarioTypeDef
} from './schedule/horario/typeDefs';

import {
	agendadasMutations,
	agendadasQueries,
	agendadasTypeDef
} from './schedule/agendadas/typeDefs';

import {
	imagesMutations,
	imagesQueries,
	imagesTypeDef
} from './attatchment/image/typeDefs';

import horarioResolvers from './schedule/horario/resolvers';
import agendadasResolvers from './schedule/agendadas/resolvers';
import imagesResolvers from './attatchment/image/resolvers';


// merge the typeDefs
const mergedTypeDefs = mergeSchemas(
	[
		'scalar JSON',
		horarioTypeDef,
		agendadasTypeDef,
		imagesTypeDef
	],
	[
		horarioQueries,
		agendadasQueries,
		imagesQueries
	],
	[
		horarioMutations,
		agendadasMutations,
		imagesMutations
	]
);

// Generate the schema object from your types definition.
export default makeExecutableSchema({
	typeDefs: mergedTypeDefs,
	resolvers: merge(
		{ JSON: GraphQLJSON }, // allows scalar JSON
		horarioResolvers,
		agendadasResolvers,
		imagesResolvers
	)
});
