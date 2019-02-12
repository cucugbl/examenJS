/**
 * Rol.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
   
    nombre_rol: {
      type: 'string',
      required: true
    },

    usuariofk: {
      collection: 'usuario',
      via: 'rolfk',
    }

  },

};

