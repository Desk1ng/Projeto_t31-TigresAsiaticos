const {DataTypes, Model} = require('sequelize')
const sequelize = require('../bd')
const author = new require('./autores')
const editora = new require('./editoras')
class Auth_edit_relacao extends Model{}
Auth_edit_relacao.init({

        AutoresId:{
            type:DtaTypes.INTEGER,
           allowNull:false,
           references:{
            model:author,
            key:'AutoresId'
           }
        },
        EditorasId:{
            type:DataTypes.INTEGER,
            allowNull:false,
            references:{
                model:editora,
                key:'EditorasId'
            }
        }
},{
    sequelize,
    modelName:"Auth_Edit_relacao"
})
editora.hasMany(Auth_edit_relacao)
Auth_edit_relacao.belongsTo(editora)
author.hasMany(Auth_edit_relacao)
Auth_edit_relacao.belongsTo(author)
sequelize.sync()
module.exports = Auth_edit_relacao