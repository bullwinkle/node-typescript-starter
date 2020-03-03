// The root provides a resolver function for each API endpoint
export const GRAPHQL_ROOT = {
  author: (id: number) => { return { id: 1, firstName: 'John', lastName: 'Smit', posts: [{id: 1}] } },

  posts: () => { return [{ id: 1, title: 'Story', votes: 8, author: { id: 1} }] },
};
