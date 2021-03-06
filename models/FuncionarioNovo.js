const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const FuncionarioNovo = new Schema({
    nome: {
        type: String,
        required: true
    },
    userName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    cpf: {
        type: Number,
        required: true
    },
    diasDeTrabalho: {
        type: Array,
    },
    dasHora: {
        type: String,
        required: true
    },
    ateHora: {
        type: String,
        required: true
    },
    senha: {
        type: String,
        required: true
    },
    tele:{
        type: Number
    },
    nivel: {
        type: Number,
        default: 1
    }
})

mongoose.model("FuncionariosNovos", FuncionarioNovo)
