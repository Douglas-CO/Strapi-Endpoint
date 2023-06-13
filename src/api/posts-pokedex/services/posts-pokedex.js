"use strict";

/**
 * posts-report service.
 */

module.exports = {
  postsPokedex: async () => {
    try {
      // fetching data
      const entries = await strapi.entityService.findMany(
        "api::pokemon-primera-generacion.pokemon-primera-generacion", {
          fields: [
            "id",
            "nombre",
            "descripcion",
            "altura",
            "peso",
            "ps",
            "ataque",
            "defensa",
            "ataque_especial",
            "defensa_especial",
            "velocidad",
            "ID_Pokemon"
          ],
          populate: {
            pokemon_categorias: {},
            pokemon_habilidads: {},
            pokemon_tipos: {},
            pokemon_debilidads: {},
            imagen: {},
          },
        }
      );
      let entriesReduced;
      console.log(entries.reduce(i => i.id))
      if (entries && Array.isArray(entries)) {
        entriesReduced = entries.reduce((acc, item) => {
          acc = acc || [];

          acc.push({
            id: item.id,
            ID_Pokemon: item.ID_Pokemon,
            Nombre: item.nombre,
            Descripcion: item.descripcion,
            Altura: item.altura,
            Peso: item.peso,
            Ataque: item.ataque,
            Defensa: item.defensa,
            SpeAtk: item.ataque_especial,
            SpeDef: item.defensa_especial,
            Velocidad: item.velocidad,
            Categorias: item.pokemon_categorias.map(e => e.categoria) || "",
            Habilidades: item.pokemon_habilidads.map(e => e.habilidad) || "",
            Tipo: item.pokemon_tipos.map(e => e.tipo) || "",
            Debilidades: item.pokemon_debilidads.map(e => e.debilidad) || "",
            foto: item.imagen.map(e => e.url) || "",
          });

          return acc;
        }, []);
      }
      return entriesReduced;
    } catch (err) {
      return err;
    }
  },
};
