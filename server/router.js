const express = require ('express');
const router = require ('express').Router();
const { getTodo } = require ('./controller.js');

router
.route('/todo')
.get(controller.get)
.post(controller.post)
.delete(controller.delete);

module.exports = router;