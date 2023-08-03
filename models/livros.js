const {DataTypes, Model} = require('sequelize')
const sequelize = require('../bd')
const usuario = new require ('./usuarios')
const editora = new require ('./editoras')
class Livros extends Model{}
Livros.init({
    nome:{
        type: DataTypes.STRING(50),
        allowNull:false
    },
    idioma:{
        type: DataTypes.STRING(50),
        allowNull:false
    },
    gen_lit:{
        type:DataTypes.STRING(50),
        allowNull:false
    },
    data_publi:{
        type:DataTypes.STRING(50),
        allowNull:false
    },
    quant_pags:{
        type:DataTypes.INTEGER,
        allowNull:false
    }
},{
    sequelize,
    modelName:'livros'
})
usuario.hasMany(Livros)
Livros.belongsTo(usuario, {foreignKey:{allownull:false}})
Livros.hasOne(editora, {foreignKey:{allownull:false}})
editora.hasMany(Livros)
sequelize.sync()
module.exports = Livros