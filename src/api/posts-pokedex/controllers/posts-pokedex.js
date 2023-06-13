'use strict';

 module.exports = {
  async postsPokedex(ctx, next) {
    try {
      const data = await strapi
        .service("api::posts-pokedex.posts-pokedex").postsPokedex();

      ctx.body = data;
    } catch (err) {
      ctx.badRequest("Post pokedex controller error", { moreDetails: err });
    }
  },
};
