const express = require('express');

const router = express.Router();

const userController = require('../controllers/userController');

const validation = require('../middlewares/userMidlleware');

router.get('/', userController.getAll);
router.get('/:id', userController.getById);
router.post('/', userController.createUsers);
router.put('/:id', validation, userController.updatedUser);
router.delete('/:id', userController.userDelete);

module.exports = router;