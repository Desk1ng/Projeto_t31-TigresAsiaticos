const {DataTypes, Model} = require('sequelize')
const sequelize = require('../bd')
const { hasMany } = require('./cita_livros')
const livros = new require('./livros')
const usuario = new require('./usuario')
class Cita_livros extends Model{}
Cita_livros({
    Citacao:{
        type: DataTypes.STRING(255),
        allownull:false
    },
    LivroId:{
        type:DataTypes.INTEGER,
        allownull:false,
        references:{
            model:livros,
            key:'LivroId'
        }
    }
},{
    sequelize,
    modelname:'cita_livros'
})
livros.belongsToMany(Cita_livros)
Cita_livros.hasMany(livros)
sequelize.sync()
module.exports = Cita_livros