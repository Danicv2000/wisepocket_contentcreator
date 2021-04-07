module.exports = {


  friendlyName: 'Edit Campaign Action',


  description: 'Edit campaign.',


  inputs: {
    campaignId: {
      type: 'string',
      description: 'A Campaign Id'
    }
  },

  exits: {

  },


  fn: async function (inputs) {
    data = this.req.body;
    if(!inputs.campaignId){return this.res.status(400).send({'error':'No Id Found in Request'})}
        // sails.log.debug(req.body);
         if(!data) return this.res.status(400).send({'error': 'Data in body Request Not Found'});
         updatedId = inputs.campaignId;
         await Campaign.update({id: updatedId},data).fetch()
         .then(campaign=>{
             return this.res.send({
                'success': true,
                 'message': 'Record Edited',
                 'data': campaign
             })
         })
         .catch(err=>{
             return this.res.status(500).send({
               'error': err
             });
         })

  }


};
