import { sequelize } from "../../db/conexionDB";
import { DataTypes } from "sequelize";

const Curso = sequelize.define("Curso", {
  id_curso: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },

  nombre_curso: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  turno: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  aula: {
    type: DataTypes.STRING,
  },
});

export default Curso;