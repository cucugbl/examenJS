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
    eliminarRol: async function (req, res) {

        const param = req.allParams();
        var usuario = await Usuario.removeFromCollection(param.id_usuario, 'rolfk', param.id_rol);
        return res.ok('Rol eliminado');
    },
    agregarPaciente: async function (req, res) {

        const param = req.allParams();
        await Usuario.addToCollection(param.id_usuario, 'pacientefk', param.id_paciente);
        return res.ok('Paciente agregado exitosamente');
    },

    login: async (req, res) => {
        const parametros = req.allParams();
        var username = parametros.correo ;
        var password = parametros.password;
        if (!(username && password)) { 
            res.badRequest( {mensaje: "No se ingreso usuario y paswrd!"}); }
        else {
            var usuarioLogeado = await Usuario.find({
                correo_usuario: parametros.correo,
                password_usuario: parametros.password,
            }).populate('rolfk');;

        }
        const error = usuarioLogeado.length === 0;
        if (!error) {
            console.log(usuarioLogeado[0]);
            return res.ok(usuarioLogeado[0]);
        } else {
            return res.badRequest({ mensaje: 'Usuario Invalido' });
        }

    },

};

