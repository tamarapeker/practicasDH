module.exports = (sequelize, dataTypes) =>{
    let alias = 'Genres';
    let cols = {
        id : {
            type: dataTypes.INTEGER,
            primaryKey : true,
            autoIncremental: true
        },
        name  : dataTypes.STRING
    }
    let config = {
        tableName : 'genres',
        timestamps : false
    }

    const Genre = sequelize.define(alias,cols,config);

    Genre.associate = function(models){
        Genre.hasMany(models.Movies, {
            as: "peliculas",
            foreignKey: "genre_id"
        })
    }

    return Genre;
}