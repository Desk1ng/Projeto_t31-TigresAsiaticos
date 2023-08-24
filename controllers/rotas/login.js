const model = new require ('../../models/usuarios')
const auth = require ('../auth')
const validacao = require ('../validacao')

module.exports = (app) => {
    app.post(`/login`, async (req,res)=>{
        try{
            let dados = req.body
            let validarLogin = await validacao.validarLogin(dados,model)
            if (validarLogin){
                let {id,nome,email} = validarLogin.usuario.dataValues
                dados = {id,nome,email}
                let token = await auth.gerarToken(dados)
                return res.json({dados,token:token}).status(200)
            }
            else{
                return res.json(validarLogin).status(200)
            }
        }catch(erro){
            return res.json(erro).status(400)
        }
    })
}