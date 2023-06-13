'use strict';

/**
 * pokemon-primera-generacion service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::pokemon-primera-generacion.pokemon-primera-generacion');
