const Sequelize = require('sequelize');
 
const DB_NAME = 'redondoparcial';
const DB_USER = 'dairi';
const DB_PASS = 'D@iri123';
 
export const database = new Sequelize(
    DB_NAME,
    DB_USER,
    DB_PASS,
 
    {
        host: 'localhost',
        dialect: 'mysql',
        port: 3306
    }
);
 
database.sync({force:true}).then(function(){
    console.log('La base de datos ha sido Creada');
})
