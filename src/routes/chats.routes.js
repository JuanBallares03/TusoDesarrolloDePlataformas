const express = require('express');
const router = express.Router();
const chatsController = require('../controllers/chats.controller');

router.get('/', chatsController.getAll);
router.get('/:id', chatsController.getById);
router.post('/', chatsController.create);
router.put('/:id', chatsController.update);
router.delete('/:id', chatsController.remove);

module.exports = router;