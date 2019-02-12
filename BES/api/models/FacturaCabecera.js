/**
 * FacturaCabecera.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    nombre_factura: {
      type: 'string',
    },
    cedula_factura: {
      type: 'string',
    },
    telefono_factura: {
      type: 'string',
    },
    direccion_factura: {
      type: 'string',
    },
    correo_factura: {
      type: 'string',
    },
    fecha_factura: {
      type: 'string',
    },
    total_factura: {
      type: 'string',
    },
    tipo_pago_factura: {
      type: 'string',
    },
    estado_factura: {
      type: 'string',
    },


     //Relation tabla facturadetalle
     facturadetallefk: {
      collection: 'facturadetalle',
      via: 'facturacabecerafk'
    },

    //Relacion con la tabla evento
    eventofk: {
      model: 'evento'
    },
     //Relacion con la tabla evento
     usuariofk: {
      model: 'usuario'
    }
    
  },

};

