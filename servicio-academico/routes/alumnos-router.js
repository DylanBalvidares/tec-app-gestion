import { Router } from "express";
import {
  crearAlumno,
  obtenerAlumno,
  obtenerTodosAlumnos,
  eliminarAlumno,
  modificarApellido,
  modificarNombre,
  modificarDni,
} from "../controllers/alumnos-controller.js";

const alumnosRouter = Router();

alumnosRouter.get("/alumnos/:id", async (req, res) => {
  const id = req.params.id;

  try {
    const alumno = await obtenerAlumno(id);

    return res.statusCode(200).json(alumno);
  } catch (error) {
    return res.statusCode(404).json(error);
  }
});

alumnosRouter.get("/alumnos", async (req, res) => {
  try {
    const alumnos = await obtenerTodosAlumnos();
    return res.statusCode(200).json(alumnos);
  } catch (error) {
    return res.json(error).statusCode(404);
  }
});

alumnosRouter.post("/alumnos/:alumno", async (req, res) => {
  //const _alumno = JSON.parse(req.body);
  console.log("== ALUMNO REQUEST:", req.body); //DEBUG
  try {
    const alumno = await crearAlumno(req.body);
    return res.json(req.body).statusCode(201);
  } catch (error) {
    return res.json(error).statusCode(400); //400?
  }
});

alumnosRouter.delete("/alumnos/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const resultado = await eliminarAlumno(id);
    return res.status(200).json(resultado);
  } catch (error) {
    return res.statusCode(400).json(error); //400?
  }
});

//========== MODIFICAR RESPONSES Y METODOS

alumnosRouter.patch("/alumnos/:nombre", async (req, res) => {
  const nombre = req.params.nombre;
  try {
    const resultado = await modificarNombre(nombre);
    return res.json(resultado).statusCode(200); //200->OK,put/patch
  } catch (error) {
    return res.json(error).statusCode(400); //400?
  }
});

alumnosRouter.patch(
  "/alumnos/modificarApellido/:apellido",
  async (req, res) => {
    const apellido = req.params.apellido;
    try {
      const resultado = await modificarApellido(apellido);
      return res.json(resultado).statusCode(200); //200->OK,put/patch
    } catch (error) {
      return res.json(error).statusCode(400); //400?
    }
  },
);

alumnosRouter.patch("/alumnos/modificarDni/:dni", async (req, res) => {
  const dni = req.params.dni;
  try {
    const resultado = await modificarDni(dni);
    return res.json(resultado).statusCode(200); //200->OK,put/patch
  } catch (error) {
    return res.json(error).statusCode(400); //400?
  }
});

// =============
export default alumnosRouter;
