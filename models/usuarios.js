const {DataTypes, Model} =  require ('sequelize')
const sequelize = require("../bd");
class Usuario extends Model{}
Usuario.init({
    nome:{
        type: DataTypes.STRING(50),
        allowNull:false
    },
    Gmail:{
        type: DataTypes.STRING(50),
        unique:true,
        allowNull:false
    },
    senha:{
        type: DataTypes.STRING(50),
        allowNull:false
    },
    comunidade:{
        type:DataTypes.STRING(100),
        allowNull:false
    }
},{
    sequelize,
    modelName:'usuario'
})

sequelize.sync()
module.exports = Usuario