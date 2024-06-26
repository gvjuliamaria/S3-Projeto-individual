var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
})


//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/selecionar", function (req, res) {
    usuarioController.selecionarIdUsuarioPorEmail(req, res);
})


module.exports = router;