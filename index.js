
const express = require('express')

const server = express()

server.use(express.json())

//Base de dados inicial para realização do crud:

let languages = [
    {
        "name": "JavaScript", 
        "creator": "Brendan Eich",
        "year": "1995"
    }
]                                                              //id inicial = 0

//Desenvolvendo método de requisição http GET - Linguagem por id

server.get('/languages/:index', (req, res) => {
    const { index } = req.params

    return res.json(languages[index])
})


//Desenvolvendo método de requisição http GET - Pegar todos os dados/linguagens

server.get('/languages', (req, res) => {
    return res.json(languages)
})


//Desenvolvendo método de requisição http POST - Adicionar nova linguagem

server.post('/languages', (req, res) => {
    const { name, creator, year } = req.body
    languages.push({name, creator, year})

    return res.json(languages)
})


//Desenvolvendo método de requisição http PUT - Atualizar totalmente uma linguagem

server.put('/languages/:index', (req, res) => {
    const { index } = req.params
    const { name, creator, year } = req.body 
     
    languages[index] = ({name, creator, year})

    return res.json(languages)
})


//Desenvolvendo método de requisição http PATCH - Atualizar parcialmente uma linguagem

server.patch('/languages/:index', (req, res) => {
    const { index } = req.params
    const { name, creator, year} = req.body 

   const Language = languages[index]

  if (name) languages[index] = {...Language, name}
  if (creator) languages[index] = {...Language, creator}
  if (year) languages[index] = {...Language, year}
    
    return res.json(languages)
})  


//Desenvolvendo método de requisição http DELETE - Deletar uma linguagem

server.delete('/languages/:index', (req, res) => {
    const { index } = req.params
    languages.splice(index, 1)
    return res.json({message: "A linguagem foi deletada com sucesso!"})
})


//Porta do servidor para realização de crud:

server.listen(3000, () => {
    console.log('O servidor está rodando...')
})  
