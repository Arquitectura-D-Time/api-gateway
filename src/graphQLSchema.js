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

// authentication/auth
import {
    sessionsMutations,
    sessionQueries,
    sessionsTypeDef
} from './authentication/auth/authtypeDef';

// authentication/users
import {
	userTypeDef,
	userQueries    
} from './authentication/user/usertypeDef';

// authentication/auth
import authResolvers from './authentication/auth/authresolvers';

// authentication/users
import userResolvers from './authentication/user/userresolvers';
//tutorias
import {
	tutoriaMutations,
	tutoriaQueries,
	tutoriaTypeDef
} from './tutorias/typeDefs';


import horarioResolvers from './schedule/horario/resolvers';
import agendadasResolvers from './schedule/agendadas/resolvers';

//UM
import comentariosResolver from './usermanagement/comentarios/comresolver';
import calificacionesResolver from './usermanagement/calificaciones/calresolver';
import estadocuentasResolver from './usermanagement/estadocuentas/ecresolver';

//tutorias
import tutoriaResolvers from './tutorias/resolvers';

// merge the typeDefs
const mergedTypeDefs = mergeSchemas(
	[
		'scalar JSON',
		horarioTypeDef,
		agendadasTypeDef,
		comentariosTypeDef,
		calificacionesTypeDef,
		estadoCuentasTypeDef,
		sessionsTypeDef,
		userTypeDef,		
		tutoriaTypeDef
		
	],
	[
		horarioQueries,
		agendadasQueries,
		comentariosQueries,
		calificacionesQueries,
		estadoCuentasQueries,
		sessionQueries,
		userQueries,
		tutoriaQueries
	],
	[
		horarioMutations,
		agendadasMutations,
		comentariosMutations,
		calificacionesMutations,
		estadoCuentasMutations,
		sessionsMutations,
		tutoriaMutations
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
		userResolvers,
		tutoriaResolvers
	)
});
