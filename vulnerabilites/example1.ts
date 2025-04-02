import { createConnection } from "typeorm";

async function getUserByEmail(email: string) {
  const connection = await createConnection({
    type: "mysql",
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT, 10),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
  });

  const query = `SELECT * FROM users WHERE email = ?`;

  const result = await connection.query(query, [email]);

  return result;
}

getUserByEmail("example@example.com")
  .then((user) => console.log(user))
  .catch((error) => console.error(error));
