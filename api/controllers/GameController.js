/**
 * GameController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  create: async (req, res) => {
    await Game.create({
      nombre: req.param('nombre'),
      cantPreg: req.param('cantPreg'),
      cantResp: req.param('cantResp')
    }).then((game) => {
        return res.send({
            'success': true,
            'message': 'Juego creado con éxito',
            'data': game
        })
    })
        .catch((err) => {
            sails.log.debug(err);
            return res.send({
                'success': false,
                'message': 'Falló la creacion del juego'
            })
        })
  },

  delete: async(req,res)=>{
  await Game.destroy(req.param('id')).fetch()
    .then((game) =>{
        return res.send({
            'message': 'Record Deleted',
            'data': game
        })
    })
    .catch((err)=>{
      sails.log.debug(err);
      return res.send({
        success: false,
        message: "Falló la operación",
      })
    })
},


edit: (req, res) => {
        if (!req.param('id')) { return req.sendStatus(400) }
        return Game.update({ id: req.param('id') }, req.allParams()).fetch()
            .then((game) => {
                return res.send({
                    'message': 'Record Edited',
                    'data': game
                })
            })
            .catch((err)=>{
              sails.log.debug(err);
              return res.send({
                success: false,
                message: "Falló la operación",
              })
            })
    }
    getGame: (req, res) => {
      Game.find().populate('userChief')
          .then(game => {
             console.log("<-------->");
              return res.send({
                  'message': 'List OF Games',
                  'data': game,
              })
          })
          .catch(err => {
              return res.sendStatus(400, {
                  'message': 'Imposible Mostrar',
                  'error': err
              })
          })
  },

};

