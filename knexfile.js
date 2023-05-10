// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  development: {
    client: "pg",
    connection: "postgres://localhost/cjs-web-store",
  },
  test: {
    client: "pg",
    connection: "postgres://localhost/test-cjs-web-store",
  },
};
