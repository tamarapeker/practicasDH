module.exports = (sequelize, dataTypes) =>{
    let alias = 'Actor_Movie';
    let cols = {
        id : {
            type: dataTypes.INTEGER,
            primaryKey : true,
            autoIncremental: true
        },
        actor_id : dataTypes.INTEGER,
        movie_id : dataTypes.INTEGER
    }
    let config = {
        tableName : 'actor_movie',
        timestamps : false
    }

    const Actor_Movie = sequelize.define(alias,cols,config);


    return Actor_Movie;
}