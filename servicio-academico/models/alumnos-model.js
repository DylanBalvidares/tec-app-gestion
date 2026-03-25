import { sequelize } from "../../db/conexionDB";
import { DataTypes } from "sequelize";
import Curso from "./cursos-model";

const Alumno = sequelize.define("Alumno", {
  id_alumno: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  apellido: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  dni: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  //FOREIGN KEY
  id_curso: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: "Curso",
      key: "id_curso",
    },
  },
});

Alumno.hasOne(Curso, {
  foreignKey: "id_curso_fk",
});

export default Alumno;
