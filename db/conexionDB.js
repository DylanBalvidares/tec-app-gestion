import { Sequelize } from "sequelize";

const DATABASE = process.env.DATABASE_URL;
const USER = process.env.DATABASE_USER;
const PWD = process.env.DATABASE_PASSWORD;

export const sequelize = new Sequelize(DATABASE, USER, PWD, {
  dialect: "mysql",
});

sequelize
  .authenticate()
  .then(() => {
    console.log("=== ¡La conexion a la BD es CORRECTA! ===");
  })
  .catch(() => {
    console.log("=== ¡La conexion a la BD es ERRONEA! ===");
  });

