const express = require('express');
const router = express.Router();
const caracteristicasController = require('../controllers/caracteristicas.controller');

router.get('/', caracteristicasController.getAll);
router.get('/:id', caracteristicasController.getById);
router.post('/', caracteristicasController.create);
router.put('/:id', caracteristicasController.update);
router.delete('/:id', caracteristicasController.remove);

module.exports = router;