const { json } = require("sequelize")

const rota = "livros"
const model = new require('../../models/livros')
module.exports = (app) =>{
    app.get(`/consultar/${rota}`, async(res)=>{
        try{
            let  dados =  await model.findAll()
            return res.json(dados)
        }catch(erro){
            return res.json(erro).status(400)
        }
    })
    app.post(`/cadastrar/${rota}`,async(req,res)=>{
        let dados = req.body
        try{
            let respBd = await model.create(dados)
            res.json(respBd).status(201)
        }catch{
            res.json(respBd).status(401)
    }})
}