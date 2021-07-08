"use strict";

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

const { sanitizeEntity } = require("strapi-utils");

module.exports = {
  /**
   * Retrieve a record.
   *
   * @return {Object}
   */

  async findByUUID(ctx) {
    const { UUID } = ctx.params;
    const entity = await strapi.query("note").findOne({ UUID, isPublic: true });
    if (entity) {
      return sanitizeEntity(entity, { model: strapi.models.note });
    } else {
      return {};
    }
  },
};
