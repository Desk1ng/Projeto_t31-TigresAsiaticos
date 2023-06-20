const {DataTypes, Model} = require('sequelize')
const sequelize = require('../bd')
const usuario = new require ('./usuarios')
const livros = new require ('./livros')
class Relacao_usuLiv extends Model{}
Relacao_usuLiv.init({
        UsuarioId:{
            type:DataTypes.INTEGER,
            allowNull:false,
            references:{
                model:usuario,
                key:'UsuarioId'
            }
        },
        LivrosId:{
            type:DataTypes.INTEGER,
            allowNull:false,
            references:{
                model:livros,
                key:'LivroId'
        }
    },
    avaliacao:{
        type:DataTypes.STRING(255),
        allowNull:false
    },
    last_read:{
        type: DataTypes.STRING(100),
        allowNull:false
    }
},{
    sequelize,
    modelName:'Relacao_usuLiv'
})
usuario.hasMany(Relacao_usuLiv)
Relacao_usuLiv.belongsTo(usuario)
livros.hasMany(Relacao_usuLiv)
Relacao_usuLiv.belongsTo(livros)
sequelize.sync()
module.exports = Relacao_usuLiv

