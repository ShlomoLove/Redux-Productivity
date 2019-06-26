const express = require ('express');
const router = require ('express').Router();
const controller = require ('./controller.js');

router
.route('/todos')
.get(controller.get)
.post(controller.post)
.delete(controller.delete)
.patch(controller.patch)

module.exports = router;