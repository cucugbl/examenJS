/**
 * EventoMedicamento.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    precio_base: {
      type: 'string',
    },

    //Relacion con la tabla evento
    eventofk: {
      model: 'evento',
      
    },
    //Relacion con la tabla medicamento
    medicamentofk: {
      model: 'medicamento',
      
    },
    
    //Relation tabla facturadetalle
    facturadetallefk: {
      collection: 'facturadetalle',
      via: 'eventomedicamentofk'
    },
    

  },

};

