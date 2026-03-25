import { Router } from "express";
import { obtenerAlumno } from "../controllers/alumnos-controller";

const router = Router();

router.get("/obtenerAlumno/:id", (req, res) => {
  const id = req.params.id;
  res.json(obtenerAlumno(id));
});
