/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable("roles", tbl => {
    tbl.increments("id").primary()
    tbl.string("role").notNullable()
  })
  .createTable("users", tbl => {
    tbl.bigIncrements("id").primary()
    tbl.string("first_name", 50).notNullable()
    tbl.string("last_name", 50).notNullable()
    tbl.string("gender").defaultTo("Private")
    tbl.date("dob").notNullable()
    tbl.bigInteger("phone").notNullable()
    tbl.string("email", 100)
    tbl.string("username", 50).notNullable()
    tbl.string("password").notNullable()
    tbl.integer("role_id").unsigned().references("id").inTable("roles")
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTableIfExists("users").dropTableIfExists("roles")
};
