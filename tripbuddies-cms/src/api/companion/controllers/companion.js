'use strict';

/**
 * companion controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::companion.companion');
