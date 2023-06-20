const {DataTypes, Model} = require('sequelize')
const sequelize = require('../bd')
class Editoras extends Model{}
Editoras.init({
    nome:{
        type:DataTypes.STRING(50),
        allowNull:false
    },
    CNPJ:{
        type:DataTypes.STRING(100),
        allowNull:false,
        unique:true
    }
},{
    sequelize,
    modelName:'editora'
})
sequelize.sync()
module.exports = Editoras