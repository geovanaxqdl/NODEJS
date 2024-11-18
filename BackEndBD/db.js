//Importar a biblioteca de conexão com o banco de dados
const mysql = require("mysql2")

//String de conexão com o banco de dados
const connection = mysql.createConnection({
    host:"localhost", //host do banco de dados
    port: 3306, //porta padrão do DB
    user:"root", //usuário padrão do DB
    password:"admin", //senha do Banco de Dados
    //database:"escolasenai"
    database:"sesisenai"
})

connection.connect(function(erro){
    if(erro){
        console.log("Conexão falhou!!!")
    }
    console.log("Conexão bem sucedida!!!")
})

module.exports = connection