import Curso from "../models/cursos-model.js";

async function crearCurso(curso) {
  try {
    const data = await Curso.create(curso); //<--create:build & save

    return data;
  } catch (error) {
    console.error("Error en crearCurso(curso):", error);
    return ("Error en crearCurso(curso):", error);
  }
}

async function eliminarCurso(id) {
  try {
    const data = await Curso.destroy({
      where: {
        id_curso: id,
      },
    });

    if (data === 0) {
      throw new Error("Error en eliminarCurso(id)");
    }

    return data;
  } catch (error) {
    console.error("Error en eliminarCurso(id)");
    return "Error en eliminarCurso(id)";
  }
}

async function modificarCurso(id, _curso) {
  if ((!_curso) instanceof Curso) {
    throw new Error("Error en modificarCurso(id,curso)");
  }

  const curso = Curso.build(_curso);

  try {
    const data = await Curso.update(
      {
        nombre_curso: curso.get.
      },
      {
        where: {
          id_curso: id,
        },
      },
    );
  } catch (error) {}
}