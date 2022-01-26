const Sequelize = require('sequelize');
/*const connection = new Sequelize('perguntas','root','',{
    host: 'localhost',
    dialect: 'mysql'
});*/
const connection = new Sequelize(process.env.DATABASE_URL,{
    dialectOptions:{
        ssl:{
            rejectUnauthorized: false,
        }
    }
}); 
// Example for postgres
/*const connection = new Sequelize('d32u4tnv0uvmad','lldjdqimiipqro','fcc3491701967c8dfe3e1b5107dfb6f97c0572ecbc7467200db2895a364a93a1',{
    host: 'ec2-3-227-149-67.compute-1.amazonaws.com',
    port:'5432',
    ssl: true,
    dialect: 'postgres'
});*/
module.exports = connection;