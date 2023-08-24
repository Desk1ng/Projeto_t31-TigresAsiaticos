const auth = require ('./auth')
module.exports={
    validarCadastro: async(dados, model)=>{
        let usuario = await model.findOne({where:{email: dados.email}})
        if (usuario!=null){
            return {erro: 'email inválido', message:"Email já cadastrado!"}
        }
        if (dados.senha != dados.confirmacao){
            return{ erro:'Senhas não conferem!',message:"As senhas nao conhencidem!"}
        }
        return {validacao:true}
    },
    validarLogin: async(dados, model)=>{
        let usuario = await model.findOne({where:{ email:dados.email }})
        if (usuario == null){
            return {message: 'Conta de email inválida', autenticado:false}
        }
        else{
            let authSenha = await auth.validarSenha(dados.senha,usuario.senha)
            return authSenha? {usuario, autenticado:true}:{erro:{message:'Senha inválida'},autenticado:false}
        }
    }
}