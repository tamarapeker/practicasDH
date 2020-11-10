module.exports = (sequelize, dataTypes) =>{
    let alias = 'Movies';
    let cols = {
        id : {
            type: dataTypes.INTEGER,
            primaryKey : true,
            autoIncremental: true
        },
        title  : dataTypes.STRING,
        rating : dataTypes.INTEGER,
        awards : dataTypes.INTEGER,
        length : dataTypes.INTEGER,
        release_date: dataTypes.DATE,
        genre_id: dataTypes.INTEGER
    }
    let config = {
        tableName : 'movies',
        timestamps : false
    }

    const Movie = sequelize.define(alias,cols,config);

    Movie.associate = function(models){
        Movie.belongsTo(models.Genres, {
            as: "generos",
            foreignKey: "genre_id"
        });

        Movie.belongsToMany(models.Actors, {
            as: "actores",
            through: "actor_movie",
            foreignKey: "movie_id",
            otherKey: "actor_id",
            timestamps: false
        })

        Movie.hasMany(models.Actor_Movie, {
            as: "actor_movie",
            foreignKey: "movie_id"
        })
    }


    return Movie;
}