const clienteModel = require('../models/clienteModel')()

module.exports.index = (req, res) => {
  clienteModel.all((erro, resultado) => {
    res.render('site/home', {
      clientes: resultado,
      erros: {},
      dados: {}
    })
  })
}

module.exports.store = (req, res) => {
  var dados = req.body

  req.assert('nome', 'Preencha um nome').notEmpty()
  req.assert('nome', 'Nome deve ter de 3 a 20 carcteres').len(3, 20)
  req.assert('email', 'Preencha um email').notEmpty()
  req.assert('email', 'Preencha um email válido').isEmail()

  var validacaoErros = req.validationErrors()

  if (validacaoErros) {
    console.log(validacaoErros);

    clienteModel.all((erro, resultado) => {
      res.render('site/home', {
        clientes: resultado,
        erros: validacaoErros,
        dados: dados
      })
    })
    return
  }

  clienteModel.save(dados, (erro, resultado) => {
    if (!erro) {
      res.redirect('/')
    } else {
      console.log('Esse cliente não existe');
      res.redirect('/')
    }
  })
}

module.exports.show = (req, res) => {
  clienteModel.find(req.params.id, (erro, resultado) => {
    if (resultado[0] && !erro) {
      res.render('site/detalhe', {
        cliente: resultado[0]
      })
    } else {
      console.log('Esse cliente não existe');
      res.redirect('/')
    }
  })
}
