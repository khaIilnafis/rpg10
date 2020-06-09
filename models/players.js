module.exports = function(sequelize, DataTypes){
    var Player = sequelize.define("Player", {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        data: {
            type: DataTypes.TEXT
        }
    })
    return Player;
}