module.exports = {


  friendlyName: 'Create',


  description: 'Create marker.',


  inputs: {

  },


  exits: {

  },


  fn: async function (inputs) {

    if(!this.req.allParams()) return this.res.status(400).send({'error': 'Data in body Request Not Found'});
    await Marker.create(this.req.allParams()).fetch()
    .then(marker=>{
      return this.res.send({
        'success': true,
        'message': 'Record Created',
        'data': marker
      })
    })
    .catch(err=>{
        return this.res.status(500).send({
          'error': err
        });
      });
  }


};
