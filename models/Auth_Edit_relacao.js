const {DataTypes, Model} = require('sequelize')
const sequelize = require('../bd')
const author = new require('./autores')
const editora = new require('./editoras')
class Auth_edit_relacao extends Model{}
Auth_edit_relacao.init({


},{
    sequelize,
    modelName:"Auth_Edit_relacao"
})
editora.hasMany(Auth_edit_relacao)
Auth_edit_relacao.belongsTo(editora, {foreignKey:{allowNull:false}})
author.hasMany(Auth_edit_relacao)
Auth_edit_relacao.belongsTo(author, {foreignKey:{allowNull:false}})
sequelize.sync()
module.exports = Auth_edit_relacao