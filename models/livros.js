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
    },
    EditorasId:{
        type:DataTypes.INTEGER,
        allowNull:false,
        references:{
            model:editora,
            key:'EditorasId'
        }
    },
    UsuarioId:{
        type:DataTypes.INTEGER,
        allowNull:false,
        references:{
            model:usuario,
            key: 'UsuarioId'
        }
    }
},{
    sequelize,
    modelName:'livros'
})
Livros.hasOne(editora)
editora.hasMany(Livros)
sequelize.sync()
module.exports = Livros