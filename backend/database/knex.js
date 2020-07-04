const environment = process.env.NODE_ENV || 'development';
const connection =require('../knexfile')[environment];
module.exports=require('knex')(connection)