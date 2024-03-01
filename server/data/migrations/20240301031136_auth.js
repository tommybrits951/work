/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable("tokens", tbl => {
    tbl.increments("id").notNullable()
    tbl.string("token").notNullable()
    tbl.bigInteger("user_id").unsigned().references("id").inTable("users")
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTableIfExists("tokens")
};
