import { Router } from "express";
import { crearAlumno, obtenerAlumno, obtenerTodosAlumnos, eliminarAlumno, modificarApellido, modificarNombre, modificarDni } from "../controllers/alumnos-controller";

const router = Router();

router.get("/alumnos/obtenerAlumno/:id", async (req, res) => {
  const id = req.params.id;

  try {
    const alumno = await obtenerAlumno(id);

    return res.json(alumno).statusCode(200);

  } catch (error) {
    return res.json(error).statusCode(404);
  }
});

router.get("/alumnos/obtenerAlumnos/", async (req, res) => {
  try {
    const alumnos = await obtenerTodosAlumnos();
    return res.json(alumnos).statusCode(200);
  } catch (error) {
    return res.json(error).statusCode(404);
  }
})

router.post("alumnos/crearAlumno/:alumno", async (req, res) => {
  const _alumno = req.params.alumno;
  try {
    const alumno = await crearAlumno(alumno);
    return res.json(alumno).statusCode(201);
  } catch (error) {
    return res.json(error).statusCode(400);//400?
  }
})

router.delete("alumnos/eliminarAlumnos/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const resultado = await eliminarAlumno(id);
    return res.json(resultado);

  } catch (error) {
    return res.json(error).statusCode(400);//400?
  }
})

router.patch("alumnos/modificarNombre/:nombre", async (req, res) => {
  const nombre = req.params.nombre;
  try {
    const resultado = await modificarNombre(nombre);
    return res.json(resultado).statusCode(200);//200->OK,put/patch
  } catch (error) {
    return res.json(error).statusCode(400);//400?
  }
})

router.patch("alumnos/modificarApellido/:apellido", async (req, res) => {
  const apellido = req.params.apellido;
  try {
    const resultado = await modificarApellido(apellido);
    return res.json(resultado).statusCode(200);//200->OK,put/patch
  } catch (error) {
    return res.json(error).statusCode(400);//400?
  }
})

router.patch("alumnos/modificarDni/:dni", async (req, res) => {
  const dni = req.params.dni;
  try {
    const resultado = await modificarDni(dni);
    return res.json(resultado).statusCode(200);//200->OK,put/patch
  } catch (error) {
    return res.json(error).statusCode(400);//400?
  }
})
