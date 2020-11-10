module.exports = (sequelize, dataTypes) =>{
    let alias = 'Actors';
    let cols = {
        id : {
            type: dataTypes.INTEGER,
            primaryKey : true,
            autoIncremental: true
        },
        first_name  : dataTypes.STRING,
        last_name : dataTypes.STRING,
        rating : dataTypes.INTEGER
    }
    let config = {
        tableName : 'actors',
        timestamps : false
    }

    const Actor = sequelize.define(alias,cols,config);

    Actor.associate = function(models){
        Actor.belongsToMany(models.Movies, {
            as: "peliculas",
            through: "actor_movie",
            foreignKey: "actor_id",
            otherKey: "movie_id",
            timestamps: false
        })
        Actor.hasMany(models.Actor_Movie, {
            as: "movie_actor",
            foreignKey: "actor_id"
        })
    }

    return Actor;
}