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

//UM

import {
	comentariosMutations,
	comentariosQueries,
	comentariosTypeDef
} from './usermanagement/comentarios/comtypeDefs';

import {
	calificacionesMutations,
	calificacionesQueries,
	calificacionesTypeDef
} from './usermanagement/calificaciones/caltypeDefs';

import {
	estadoCuentasMutations,
	estadoCuentasQueries,
	estadoCuentasTypeDef
} from './usermanagement/estadocuentas/ectypeDefs';

// authentication
import {
    sessionsMutations,
    sessionQueries,
    sessionsTypeDef
} from './authentication/authtypeDef';

// authentication
import authResolvers from './authentication/authresolvers';

import horarioResolvers from './schedule/horario/resolvers';
import agendadasResolvers from './schedule/agendadas/resolvers';

//UM
import comentariosResolver from './usermanagement/comentarios/comresolver';
import calificacionesResolver from './usermanagement/calificaciones/calresolver';
import estadocuentasResolver from './usermanagement/estadocuentas/ecresolver';

// merge the typeDefs
const mergedTypeDefs = mergeSchemas(
	[
		'scalar JSON',
		horarioTypeDef,
		agendadasTypeDef,
		comentariosTypeDef,
		calificacionesTypeDef,
		estadoCuentasTypeDef,
		sessionsTypeDef		
	],
	[
		horarioQueries,
		agendadasQueries,
		comentariosQueries,
		calificacionesQueries,
		estadoCuentasQueries,
		sessionQueries
	],
	[
		horarioMutations,
		agendadasMutations,
		comentariosMutations,
		calificacionesMutations,
		estadoCuentasMutations,
		sessionsMutations
	]
);

// Generate the schema object from your types definition.
export default makeExecutableSchema({
	typeDefs: mergedTypeDefs,
	resolvers: merge(
		{ JSON: GraphQLJSON }, // allows scalar JSON
		horarioResolvers,
		agendadasResolvers,
		comentariosResolver,
		calificacionesResolver,
		estadocuentasResolver,
		authResolvers,
	)
});
