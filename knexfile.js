module.exports = {

    development: {
      client: "pg",
      connection: 'postgres://localhost/grecipes'
    },
    production: {
      client: "postgresql",
      connection: process.env.DATABASE_URL
    }

  };
