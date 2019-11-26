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
    getById(room_id: String!, token: String!, username: String!): [Notification!]
    userById(id: Int!): User!
`;

export const notificationMutations = `
    createNotification(notifications: NotificationInput!) : Notification!
`;
