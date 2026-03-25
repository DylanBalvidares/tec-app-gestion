import Alumno from "../models/alumnos-model";

export async function obtenerAlumno(id) {
  Alumno.findByPk(id);
}
