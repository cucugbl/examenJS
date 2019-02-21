/**
 * Usuario.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    nombre_usuario: {
      type: 'string',
     required: true
    },

    correo_usuario: {
      type: 'string',
       isEmail: true,
      unique: true,
       required: true,
    },

    password_usuario: {
      type: 'string',
      required: true,
      
      minLength:2,
      maxLength:16,
      regex: /^(?=(?:.*\d){1})(?=(?:.*[A-Z]){1})(?=(.*[\W]){1,})(?!.*\s)(?=(?:.*[a-z]){1})\S{4,}$/i,
      

    },

    fecha_nacimiento_usuario: {
      type: 'string',
      //required: true
    },
    //Relacion con la tabla rol
    rolfk: {
      collection: 'rol',
      via: 'usuariofk',
    },
    //Relacion con la tabla paciente
    pacientefk: {
      collection: 'paciente',
      via: 'usuariofk',
    },
      //Relation tabla facturacabecera
      facturacabecerafk: {
        collection: 'facturacabecera',
        via: 'usuariofk'
      },
  },

};

