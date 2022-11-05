const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const opts = { toJSON: { virtuals: true } };
const TarefaSchema = new Schema({
        descrição: { type: String, required: true }
    },
    opts
);

TarefaSchema.virtual("url").get(function () {
    return `/tarefa/${this._id}`;
});

//Forçando que o nome da coleção seja utilizado em português (ao invés de inglês no plural)
module.exports = mongoose.model("tarefa", TarefaSchema, "tarefa");
