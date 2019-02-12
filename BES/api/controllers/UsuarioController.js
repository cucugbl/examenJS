/**
 * UsuarioController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    agregarRol: async function (req, res) {

        const param = req.allParams();
        var usuario = await Usuario.addToCollection(param.id_usuario, 'rolfk', param.id_rol);
        return res.ok('Rol agregado exitosamente');
    },
    agregarPaciente: async function (req, res) {

        const param = req.allParams();
        var usuario = await Usuario.addToCollection(param.id_usuario, 'pacientefk', param.id_paciente);
        return res.ok('Paciente agregado exitosamente');
    },

};

