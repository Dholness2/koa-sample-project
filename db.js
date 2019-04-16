const db = require("typeorm");

const  postgresDB = async () => {
  return await db
    .createConnection({
      type: "postgres",
      host: "sampleApp",
      port: 5432,
      username: "test",
      password: "root",
      database: "sampleAppe",
      ssl: true,
      logging: ["query", "error"],
      synchronize: true
    })
    .then(connection => {
      console.log("Database connection established");
    });
};

module.exports = postgresDB;
