
const express = require('express');
const router = express.Router();

const usersController = require('../controllers/users');

router.get('/', usersController.getAll);

router.get('/:id', usersController.getSingle);

router.post('/', usersController.createuser);

router.put('/:id', usersController.updateuser);

router.delete('/:id', usersController.deleteuser);

module.exports = router;
