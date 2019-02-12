/**
 * Evento.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    nombre_evento: {
      type: 'string',
      required: true
    },
    fecha_evento: {
      type: 'string',

    },
    latitud_evento: {
      type: 'string',

    },
    longitud_evento: {
      type: 'string',

    },

    //Relation tabla EventosMedicamento
    eventomedicamentofk: {
      collection: 'eventomedicamento',
      via: 'eventofk'
    },
    
     //Relation tabla facturacabecera
     facturacabecerafk: {
      collection: 'facturacabecera',
      via: 'eventofk'
    },


  },

};

