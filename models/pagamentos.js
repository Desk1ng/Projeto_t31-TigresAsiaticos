const {DataTypes, Model} = require('sequelize')
const sequelize = require('../bd')
const usuario = new require('./usuarios')
class Pagamentos extends Model{}
Pagamentos.init({
    method:{
        type: DataTypes.STRING(50),
        allowNull:false
    },
    data_pag:{
        type: DataTypes.STRING(50),
        allowNull:false
    },
    UsuarioId:{
        type: DataTypes.INTEGER,
        allowNull:false,
        references:{
            model:usuario,
            key: 'UsuarioId'
        }
    }
},{
    sequelize,
    modelName:'pagamento'
})
usuario.hasMany(Pagamentos)
Pagamentos.belongsTo(usuario)
sequelize.sync()
module.exports = Pagamentos
