module.exports = {
  routes: [
    {
      method: "GET",
      path: "/posts-pokedex",
      handler: "posts-pokedex.postsPokedex",
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
