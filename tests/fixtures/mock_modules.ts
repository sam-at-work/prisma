import { ProjectDefinition } from '../../src/types'

export const mockDefinition: ProjectDefinition = {
  "modules": [{
    "name": "",
    "content": "{\n  databaseSchema: {\n    src: \"./databaseSchema/project.graphql\"\n  }\n  modelPermissions: [{\n    description: \"some description\"\n    isEnabled: true\n    operation: \"Todo.READ\"\n    authenticated: true\n    query: {\n      src: \"./permissions/cj6ck6o9i0000wd98eyplfjn2.graphql\"\n    }\n    fields: [\"*\"]\n  }, {\n    isEnabled: true\n    operation: \"Todo.READ\"\n    authenticated: false\n    query: {\n      src: \"./permissions/cj6ck6o9n0001wd98cpatb52d.graphql\"\n    }\n    fields: [\"todo.status\"]\n  }, {\n    isEnabled: true\n    operation: \"Comment.READ\"\n    authenticated: false\n    fields: [\"*\"]\n  }, {\n    isEnabled: true\n    operation: \"Comment.CREATE\"\n    authenticated: false\n    fields: [\"*\"]\n  }, {\n    isEnabled: true\n    operation: \"Comment.UPDATE\"\n    authenticated: false\n    fields: [\"*\"]\n  }, {\n    isEnabled: true\n    operation: \"Comment.DELETE\"\n    authenticated: false\n    fields: [\"*\"]\n  }, {\n    isEnabled: true\n    operation: \"User.READ\"\n    authenticated: false\n    fields: [\"*\"]\n  }, {\n    isEnabled: true\n    operation: \"User.CREATE\"\n    authenticated: false\n    fields: [\"*\"]\n  }, {\n    isEnabled: true\n    operation: \"User.UPDATE\"\n    authenticated: false\n    fields: [\"*\"]\n  }, {\n    isEnabled: true\n    operation: \"User.DELETE\"\n    authenticated: false\n    fields: [\"*\"]\n  }]\n  relationPermissions: [{\n    isEnabled: true\n    relation: \"CommentToTodo\"\n    connect: true\n    disconnect: false\n    authenticated: true\n    query: {\n      src: \"./permissions/pid.graphql\"\n    }\n  }, {\n    isEnabled: true\n    relation: \"CommentToTodo\"\n    connect: true\n    disconnect: true\n    authenticated: false\n  }]\n  functions: [{\n    name: \"chargeCreditCard\"\n    isEnabled: true\n    handler: {\n      code: {\n        src: \"./code/chargeCreditCard.js\"\n      }\n    }\n    nodeCallback: {\n      target: \"Todo\"\n      operation: CREATE\n      step: TRANSFORM_RESPONSE\n      order: 0\n    }\n  }, {\n    name: \"sendReceiptToCustomer\"\n    isEnabled: true\n    handler: {\n      webhook: {\n        url: \"some.url\"\n        headers: []\n      }\n    }\n    serversideSubscription: {\n      subscriptionQuery: {\n        src: \"./code/sendReceiptToCustomer.graphql\"\n      }\n    }\n  }, {\n    name: \"checkAvailability\"\n    isEnabled: true\n    handler: {\n      code: {\n        src: \"./code/checkAvailability.js\"\n      }\n    }\n    serversideSubscription: {\n      schemaExtension: {\n        src: \"./code/checkAvailability.graphql\"\n      }\n    }\n  }]\n  pats: []\n}",
    "files": {
      "./databaseSchema/project.graphql": "type Comment implements Node {\n  id: ID! @isUnique\n  isHighlightedOf: Todo @relation(name: \"CommentToTodo\")\n  text: String!\n  todo: [Todo!]! @relation(name: \"CommentToTodo\")\n}\n\ntype Todo implements Node {\n  comments: Comment! @relation(name: \"CommentToTodo\")\n  highlightedComment: Comment @relation(name: \"CommentToTodo\")\n  id: ID! @isUnique\n  score: Float @defaultValue(value: 3.1415)\n  status: TodoStatus @defaultValue(value: Done)\n  title: String! @defaultValue(value: \"Default Title\")\n}\n\nenum TodoStatus {\n  Active\n  Done\n}\n\ntype User implements Node {\n  id: ID! @isUnique\n}",
      "./code/checkAvailability.graphql": "\ntype AvailabilityPayload {\n  isAvailable: Boolean!\n}\n\nextend type Query {\n  checkAvailability(what: String!): AvailabilityPayload!\n}\n    \"",
      "./code/sendReceiptToCustomer.graphql": "subscription { Todo{node{title}} }\"",
      "./code/chargeCreditCard.js": "// charge the credit card ...",
      "./code/checkAvailability.js": "module.exports = function { return {data: {isAvailable: true}}}\"",
      "./permissions/cj6ck6o9i0000wd98eyplfjn2.graphql": "this is a permission query",
      "./permissions/cj6ck6o9n0001wd98cpatb52d.graphql": "this is another permission query",
      "./permissions/pid.graphql": "some graph query for relation permission"
    }
  }]
}

export const changedMockDefinition: ProjectDefinition = {
  "modules": [{
    "name": "",
    "content": "{\n  databaseSchema: {\n    src: \"./databaseSchema/project.graphql\"\n  }\n  modelPermissions: [{\n    description: \"some description\"\n    isEnabled: true\n    operation: \"Todo.READ\"\n    authenticated: true\n    query: {\n      src: \"./permissions/cj6ck6o9i0000wd98eyplfjn2.graphql\"\n    }\n    fields: [\"*\"]\n  }, {\n    isEnabled: true\n    operation: \"Todo.READ\"\n    authenticated: false\n    query: {\n      src: \"./permissions/cj6ck6o9n0001wd98cpatb52d.graphql\"\n    }\n    fields: [\"todo.status\"]\n  }, {\n    isEnabled: true\n    operation: \"Comment.READ\"\n    authenticated: false\n    fields: [\"*\"]\n  }, {\n    isEnabled: true\n    operation: \"Comment.CREATE\"\n    authenticated: false\n    fields: [\"*\"]\n  }, {\n    isEnabled: true\n    operation: \"Comment.UPDATE\"\n    authenticated: false\n    fields: [\"*\"]\n  }, {\n    isEnabled: true\n    operation: \"Comment.DELETE\"\n    authenticated: false\n    fields: [\"*\"]\n  }, {\n    isEnabled: true\n    operation: \"User.READ\"\n    authenticated: false\n    fields: [\"*\"]\n  }, {\n    isEnabled: true\n    operation: \"User.CREATE\"\n    authenticated: false\n    fields: [\"*\"]\n  }, {\n    isEnabled: true\n    operation: \"User.UPDATE\"\n    authenticated: false\n    fields: [\"*\"]\n  }, {\n    isEnabled: true\n    operation: \"User.DELETE\"\n    authenticated: false\n    fields: [\"*\"]\n  }]\n  relationPermissions: [{\n    isEnabled: true\n    relation: \"CommentToTodo\"\n    connect: true\n    disconnect: false\n    authenticated: true\n    query: {\n      src: \"./permissions/pid.graphql\"\n    }\n  }, {\n    isEnabled: true\n    relation: \"CommentToTodo\"\n    connect: true\n    disconnect: true\n    authenticated: false\n  }]\n  functions: [{\n    name: \"chargeCreditCard\"\n    isEnabled: true\n    handler: {\n      code: {\n        src: \"./code/chargeCreditCard.js\"\n      }\n    }\n    nodeCallback: {\n      target: \"Todo\"\n      operation: CREATE\n      step: TRANSFORM_RESPONSE\n      order: 0\n    }\n  }, {\n    name: \"sendReceiptToCustomer\"\n    isEnabled: true\n    handler: {\n      webhook: {\n        url: \"some.url\"\n        headers: []\n      }\n    }\n    serversideSubscription: {\n      subscriptionQuery: {\n        src: \"./code/sendReceiptToCustomer.graphql\"\n      }\n    }\n  }, {\n    name: \"checkAvailability\"\n    isEnabled: true\n    handler: {\n      code: {\n        src: \"./code/checkAvailability.js\"\n      }\n    }\n    serversideSubscription: {\n      schemaExtension: {\n        src: \"./code/checkAvailability.graphql\"\n      }\n    }\n  }]\n  pats: []\n}",
    "files": {
      "./databaseSchema/project.graphql": "type Comment implements Node {\n  id: ID! @isUnique\n  isHighlightedOf: Todo @relation(name: \"CommentToTodo\")\n  text: String!\n  todo: [Todo!]! @relation(name: \"CommentToTodo\")\n}\n\ntype Todo implements Node {\n  comments: Comment! @relation(name: \"CommentToTodo\")\n  highlightedComment: Comment @relation(name: \"CommentToTodo\")\n  id: ID! @isUnique\n  score: Float @defaultValue(value: 3.1415)\n  status: TodoStatus @defaultValue(value: Done)\n  title: String! @defaultValue(value: \"Default Title\")\n}\n\nenum TodoStatus {\n  Active\n  Done\n}\n\ntype User implements Node {\n  id: ID! @isUnique\n}",
      "./code/checkAvailability.graphql": "\ntype AvailabilityPayload {\n  isAvailable: Boolean!\n}\n\nextend type Query {\n  checkAvailability(what: String!): AvailabilityPayload!\n}\n    \"",
      "./code/sendReceiptToCustomer.graphql": "subscription { Todo{node{title}} }\"",
      "./code/chargeCreditCard.js": "// charge the credit card ...",
      "./code/checkAvailability.js": "module.exports = function { return {data: {isAvailable: true}}}\"",
      "./permissions/cj6ck6o9i0000wd98eyplfjn2.graphql": "this is a permission query. is also has been changed",
      "./permissions/cj6ck6o9n0001wd98cpatb52d.graphql": "this is another permission query",
      "./permissions/pid.graphql": "some graph query for relation permission"
    }
  }]
}

export const mockFileNames: string[] = ['/code/chargeCreditCard.js',
  '/code/checkAvailability.graphql',
  '/code/checkAvailability.js',
  '/code/sendReceiptToCustomer.graphql',
  '/databaseSchema/project.graphql',
  '/permissions/cj6ck6o9i0000wd98eyplfjn2.graphql',
  '/permissions/cj6ck6o9n0001wd98cpatb52d.graphql',
  '/permissions/pid.graphql',
  '/project.gcl' ]

export const mockFiles: string[] = [ '// charge the credit card ...',
  '\ntype AvailabilityPayload {\n  isAvailable: Boolean!\n}\n\nextend type Query {\n  checkAvailability(what: String!): AvailabilityPayload!\n}\n    "',
  'module.exports = function { return {data: {isAvailable: true}}}"',
  'subscription { Todo{node{title}} }"',
  'type Comment implements Node {\n  id: ID! @isUnique\n  isHighlightedOf: Todo @relation(name: "CommentToTodo")\n  text: String!\n  todo: [Todo!]! @relation(name: "CommentToTodo")\n}\n\ntype Todo implements Node {\n  comments: Comment! @relation(name: "CommentToTodo")\n  highlightedComment: Comment @relation(name: "CommentToTodo")\n  id: ID! @isUnique\n  score: Float @defaultValue(value: 3.1415)\n  status: TodoStatus @defaultValue(value: Done)\n  title: String! @defaultValue(value: "Default Title")\n}\n\nenum TodoStatus {\n  Active\n  Done\n}\n\ntype User implements Node {\n  id: ID! @isUnique\n}',
  'this is a permission query',
  'this is another permission query',
  'some graph query for relation permission',
  '{\n  databaseSchema: {\n    src: "./databaseSchema/project.graphql"\n  }\n  modelPermissions: [{\n    description: "some description"\n    isEnabled: true\n    operation: "Todo.READ"\n    authenticated: true\n    query: {\n      src: "./permissions/cj6ck6o9i0000wd98eyplfjn2.graphql"\n    }\n    fields: ["*"]\n  }, {\n    isEnabled: true\n    operation: "Todo.READ"\n    authenticated: false\n    query: {\n      src: "./permissions/cj6ck6o9n0001wd98cpatb52d.graphql"\n    }\n    fields: ["todo.status"]\n  }, {\n    isEnabled: true\n    operation: "Comment.READ"\n    authenticated: false\n    fields: ["*"]\n  }, {\n    isEnabled: true\n    operation: "Comment.CREATE"\n    authenticated: false\n    fields: ["*"]\n  }, {\n    isEnabled: true\n    operation: "Comment.UPDATE"\n    authenticated: false\n    fields: ["*"]\n  }, {\n    isEnabled: true\n    operation: "Comment.DELETE"\n    authenticated: false\n    fields: ["*"]\n  }, {\n    isEnabled: true\n    operation: "User.READ"\n    authenticated: false\n    fields: ["*"]\n  }, {\n    isEnabled: true\n    operation: "User.CREATE"\n    authenticated: false\n    fields: ["*"]\n  }, {\n    isEnabled: true\n    operation: "User.UPDATE"\n    authenticated: false\n    fields: ["*"]\n  }, {\n    isEnabled: true\n    operation: "User.DELETE"\n    authenticated: false\n    fields: ["*"]\n  }]\n  relationPermissions: [{\n    isEnabled: true\n    relation: "CommentToTodo"\n    connect: true\n    disconnect: false\n    authenticated: true\n    query: {\n      src: "./permissions/pid.graphql"\n    }\n  }, {\n    isEnabled: true\n    relation: "CommentToTodo"\n    connect: true\n    disconnect: true\n    authenticated: false\n  }]\n  functions: [{\n    name: "chargeCreditCard"\n    isEnabled: true\n    handler: {\n      code: {\n        src: "./code/chargeCreditCard.js"\n      }\n    }\n    nodeCallback: {\n      target: "Todo"\n      operation: CREATE\n      step: TRANSFORM_RESPONSE\n      order: 0\n    }\n  }, {\n    name: "sendReceiptToCustomer"\n    isEnabled: true\n    handler: {\n      webhook: {\n        url: "some.url"\n        headers: []\n      }\n    }\n    serversideSubscription: {\n      subscriptionQuery: {\n        src: "./code/sendReceiptToCustomer.graphql"\n      }\n    }\n  }, {\n    name: "checkAvailability"\n    isEnabled: true\n    handler: {\n      code: {\n        src: "./code/checkAvailability.js"\n      }\n    }\n    serversideSubscription: {\n      schemaExtension: {\n        src: "./code/checkAvailability.graphql"\n      }\n    }\n  }]\n  pats: []\n}' ]
