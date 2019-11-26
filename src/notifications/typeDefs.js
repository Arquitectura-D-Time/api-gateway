export const notificationsTypeDef = `
type Notification {
    _id: String!
    type: String!
    description: String!
    toUserId: Int!
    fromUserId: Int!
    creationDate: String!
    status: String!
}
input NotificationInput {
    type: String!
    description: String!
    toUserId: Int!
    fromUserId: Int!
    creationDate: String!
    status: String!
}`;

export const notificationQueries = `
    test: [Notification!]
    getById(_id: String!): [Notification!]
    getByToIdUser(toUserId: Int!): [Notification!]
    getByFromIdUser(fromUserId: Int!) : [Notification!]
    getBytoUserStatus(toUserId: Int!, status: String!): [Notification!]
    getByfromUserStatus(fromUserId: Int!, status: String!): [Notification!]
`;

export const notificationMutations = `
    createNotification(notifications: NotificationInput!) : Notification!
`;
