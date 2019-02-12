/**
 * FacturaDetalle.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    cantidad: {
      type: 'string',
      //required: true
    },
    precio: {
      type: 'string',
      
    },
    total: {
      type: 'string',
      
    },

     //Relacion con la tabla EventoMedicamento
     eventomedicamentofk: {
      model: 'eventomedicamento'
    },
     //Relacion con la tabla factura cabecera
     facturacabecerafk: {
      model: 'facturacabecera'
    }
  },

};

