module.exports = {

    development: {
      client: "pg",
      connection: 'postgres://localhost/grecipes-back-end'
    },
    production: {
      client: "postgresql",
      connection: process.env.DATABASE_URL
    }

  };
