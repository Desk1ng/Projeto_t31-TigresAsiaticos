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
    },
    UsuarioId:{
        type:DataTypes.INTEGER,
        allowNull: false,
        references:{
            model:usuario,
            key:'UsuarioId'
        }
    }
},{
    sequelize,
    modelname:'cita_livros'
})
usuario.hasMany(Cita_livros)
Cita_livros.hasOne(usuario)
livros.belongsToMany(Cita_livros)
Cita_livros.hasMany(livros)
sequelize.sync()
module.exports = Cita_livros