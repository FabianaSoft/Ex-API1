import mysql from "mysql2/promise"
import dotenv from 'dotenv';
dotenv.config();

// Para que a conexao funcione, precisamos de um arquivo chamado ".env" que contenha os dados abaixo
// Ex.: 
// DB_HOST="localhost"


const conexao = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "Software2024$",
    database: "empresa"
})

export default conexao

