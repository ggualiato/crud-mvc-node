const mysql = require('mysql');

var con = () => {
  return mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'curso_node'
  })
}

/* query para criar tabela no MySQL
  CREATE TABLE `clientes` (
    `id` int(11) NOT NULL,
    `nome` varchar(150) NOT NULL,
    `email` varchar(200) NOT NULL,
    PRIMARY KEY (`id`)
  );
*/

module.exports = con
