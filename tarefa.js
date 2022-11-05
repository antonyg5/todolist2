const express = require("express");
const router = express.Router();
const animaisController = require("../controllers/tarefasController");

router.get("/", tarefasController.list);
router.get("/show/:animalId/", tarefassController.show);
router.get("/create/", tarefassController.create);
router.post("/create/", tarefasController.create);
router.post("/:animalId/update", tarefasController.update);
router.get("/:animalId/update", tarefasController.update);
router.get("/:animalId/delete", tarefasController.delete);

module.exports = router;
