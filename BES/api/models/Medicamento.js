/**
 * Medicamento.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    nombre_medicamento: {
      type: 'string',
      required: true
    },
    gramos_ingerir: {
      //type: 'decimal',
      type: 'string',
      required: true
    },
    composicion: {
      type: 'string',
      required: true
    },
    usado_para: {
      type: 'string',
      required: true
    },
    fecha_caducidad: {
      type: 'string',
      required: true
    },
    numero_pastillas: {
      type: 'string',
      required: true
    },
    pacientefk: {
      collection: 'paciente',
      via: 'medicamentofk',
    },
    
    //Relation tabla EventosMedicamento
    eventomedicamentofk: {
      collection: 'eventomedicamento',
      via: 'medicamentofk'
    },


  },

};

