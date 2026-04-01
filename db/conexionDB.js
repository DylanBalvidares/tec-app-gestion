import "dotenv/config";
import { Sequelize } from "sequelize";

console.log("=== URL:", process.env.DATABASE_URL);
console.log("=== DATABASE NAME:", process.env.DATABASE_NAME);
console.log("=== PASSWORD:", process.env.DATABASE_PASSWORD);

export const sequelize = new Sequelize(
  //"mysql://root:@localhost:3306/gestion_tecnica2",
  process.env.DATABASE_NAME,
  process.env.DATABASE_USER,
  process.env.DATABASE_PASSWORD,
  {
    dialect: "mysql",
    logging: console.log,
    define: {
      timestamps: false, //DESHABILITAR TIMESTAMPS(
      // campos automaticos que registran
      // cuando se creo o se actualizo la BD)
    },
  },
);

sequelize
  .authenticate()
  .then(() => {
    console.log("=== ¡La conexion a la BD es CORRECTA! ===");
  })
  .catch(() => {
    console.log("=== ¡La conexion a la BD FALLO! ===");
  });
