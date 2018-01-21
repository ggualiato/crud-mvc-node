const db = require('../../config/db');

module.exports = () => {
  this.all = (retorno) => {
    var con = db()

    return con.query('SELECT * FROM clientes', retorno)
  }

  this.find = (id, retorno) => {
    var con = db()

    return con.query('SELECT * FROM clientes WHERE id = ?', id, retorno)
  }

  this.save = (dados, retorno) => {
    var con = db()

    return con.query('INSERT INTO clientes set ?', dados, retorno)
  }

  return this
}
