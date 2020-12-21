const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
   res.status(200).send({
    mensagem: 'usando outra rota'
   });
});

router.post('/', (req, res, next) => {
    res.status(201).send({
        mensagem: 'usando post de produtos'
    });
});

router.post('/:valor', (req, res, next) => {
const valor = req.params.valor;
const result = valor * 2;
    res.status(201).send({
        mensagem: 'a multiplicação por dois do valor passado é:',
        resultado: result
    });
});

router.get('/hello-world', (req, res, next) => {
    res.status(200).send({
     mensagem: 'Hello World!!!'
    });
 });



module.exports = router;