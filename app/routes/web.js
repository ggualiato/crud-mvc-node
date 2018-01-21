var clienteController = require('../controllers/clienteController')

module.exports = (app) => {
  app.get('/', (req, res) => {
    clienteController.index(req, res)
  })

  app.get('/contato', (req, res) => {
    res.render('site/contato')
  })

  app.get('/detalhe/:id', (req, res) => {
    clienteController.show(req, res)
  })

  app.post('/', (req, res) => {
    clienteController.store(req, res)
  })
}
