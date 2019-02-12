/**
 * Paciente.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    nombre_paciente: {
      type: 'string',
      required: true
    },
    apellido_paciente: {
      type: 'string',
      required: true
    },
    fecha_naciemiento_paciente: {
      type: 'string',
      required: true
    },
    hijos_paciente: {
      type: 'string',
      // type: '',
      required: true
    },
    seguro_paciente: {
      type: 'string',
      //type: 'bolean',
      required: true
    },

    usuariofk: {
      collection: 'usuario',
      via: 'pacientefk',
    },

    medicamentofk: {
      collection: 'medicamento',
      via: 'pacientefk',
    },
  },

};

