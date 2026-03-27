import Alumno from "../models/alumnos-model.js";

async function obtenerTodosAlumnos() {
  try {
    const alumno = await Alumno.findAll();

    if (alumno.length === 0) {
      throw new Error("No se encontraron alumnos");
    }

    return alumno;
  } catch (error) {
    console.error("Error en obtenerTodosAlumnos", error);
    return "Error en obtenerTodosAlumnos";
  }
}

async function obtenerAlumno(id) {
  try {
    const alumno = await Alumno.findByPk(id);

    if (!alumno) {
      throw new Error("Error en obtenerAlumno(id)");
    }

    return alumno;
  } catch (error) {
    console.error("Error en obtenerAlumno(id):", error);
    return ("Error en obtenerAlumno(id):", error);
  }
}

async function crearAlumno(alumno) {
  try {
    const data = await Alumno.create(alumno);

    if (!data) {
      return new Error("Error en crearAlumno");
    }

    return data;
  } catch (error) {
    console.error("Error en crearAlumno(alumno):", error);
    return ("Error en crearAlumno(alumno):", error);
  }
}

async function eliminarAlumno(id) {
  try {
    const data = await Alumno.destroy({
      where: {
        id_alumno: id,
      },
    });

    if (data === 0) {
      throw new Error("Error en eliminarAlumno(id)");
    }

    return data;
  } catch (error) {
    console.error("Error en eliminarAlumno(id)");
    return "Error en eliminarAlumno(id)";
  }
}

async function modificarNombre(id, nombre) {
  try {
    const data = await Alumno.update(
      {
        nombre_alumno: nombre,
      },
      {
        where: {
          id_alumno: id,
        },
      },
    );

    if (!data) {
      throw new Error("Error en modificarNombre(id,nombre)");
    }

    return data;
  } catch (error) {
    console.error("Error en modificarNombre(id,nombre)");
    return "Error en modificarNombre(id,nombre)";
  }
}

async function modificarApellido(id, apellido) {
  try {
    const data = await Alumno.update(
      {
        apellido_alumno: apellido,
      },
      {
        where: {
          id_alumno: id,
        },
      },
    );

    if (!data) {
      throw new Error("Error en modificarApellido(id,apellido)");
    }

    return data;
  } catch (error) {
    console.error("Error en modificarApellido(id,apellido)");
    return "Error en modificarApellido(id,apellido)";
  }
}

async function modificarDni(id, dni) {
  try {
    const data = await Alumno.update(
      {
        dni_alumno: apellido,
      },
      {
        where: {
          id_alumno: id,
        },
      },
    );

    if (!data) {
      throw new Error("Error en modificarDni(id,dni)");
    }

    return data;
  } catch (error) {
    console.error("Error en modificarDni(id,dni)");
    return "Error en modificarDni(id,dni)";
  }
}

async function modificarCursoAlumno(id, curso_id) {
  try {
    const alumno = await Alumno.update(
      {
        id_curso: curso_id,
      },
      {
        where: {
          id_alumno: id,
        },
      },
    );
  } catch (error) {}
}

async function modificarAlumno(alumno) {}

export {
  obtenerTodosAlumnos,
  obtenerAlumno,
  crearAlumno,
  eliminarAlumno,
  modificarNombre,
  modificarApellido,
  modificarDni,
  modificarCursoAlumno,
  modificarAlumno,
};
