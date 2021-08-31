//configurar o express
const porta = 3003

const express = require('express')
const app = express() //instanciar e atribuir



//envia como resposta
app.get('/produtos',(req, res, next) => {
    res.send({nome: "Notebook", preco: 123.45}) 
})


//ouvir
app.listen(porta, () => {
    console.log(`Servidor executando na porta ${porta}`)
})
