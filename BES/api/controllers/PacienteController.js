/**
 * PacienteController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    agregarMedicamentos: async function (req, res) {

        const param = req.allParams();
        var Medicamento = await Paciente.addToCollection(param.id_paciente, 'medicamentofk', param.id_medicamento);
        return res.ok('Medicamento agregado exitosamente');
    },

};

