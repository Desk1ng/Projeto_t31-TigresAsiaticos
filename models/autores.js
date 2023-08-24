const {DataTypes, Model} = require('sequelize')
const editora = require("./editoras")
const sequelize = require("../bd");
const Usuario = require('./usuarios');
const Auth_edit_relacao = require('./Auth_Edit_relacao');
class Autores extends Model{}
Autores.init({
    nome:{
        type:DataTypes.STRING(50),
        allowNull:false
    },
    idade:{
        type:DataTypes.STRING(50),
        allowNull:false
    },
    livros:{
        type:DataTypes.STRING(50),
        allowNull:false
    }
},{
    sequelize,
    modelName:'autores'
})
editora.belongsToMany(Autores, { through: Auth_edit_relacao });
Autores.belongsToMany(editora,  { through: Auth_edit_relacao })
sequelize.sync()
module.exports = Autores