const path = require("path");

module.exports = {
  development: {
    client: "sqlite3",
    connection: {
      filename: path.resolve(__dirname, "api", "database", "database.db")
    },
    migrations: {
      directory: path.resolve(__dirname, "api", "database", "migrations")
    },
    seeds: {
      directory: path.resolve(__dirname, "api", "database", "seeds")
    },
    useNullAsDefault: true
  }
};