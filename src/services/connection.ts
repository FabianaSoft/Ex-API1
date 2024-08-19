import mysql from "mysql2/promise"


const conexao = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "Software2024$",
    database: "empresa"
})

export default conexao