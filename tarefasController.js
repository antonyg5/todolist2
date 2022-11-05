const ObjectId = require('mongoose').Types.ObjectId;
const Animal = require('../models/tarefa');

exports.list = async (req, res) => {
    await Tarefa.find({}).exec(function(err, docs) {
        res.render("tarefas/index", { tarefas : docs, msg : res.msg});
    });
}

exports.show = (req, res) => {
    res.send(`NÃO IMPLEMENTADO: ${req.params.id}`);
}

exports.create = (req, res) => {
    if (req.method == "POST") {
        const tarefaDocument = new Tarefa({
            nome: req.body.nome
        });
        tarefaDocument
            .save()
            .then(result => {
                res.render("tarefa/create", { msg: 'Tarefa cadastrado com sucesso.' });
            })
            .catch(err => {
                res.status(500).json({ error: err });
            });
    } else {
        res.render('tarefa/create');
    }
}

exports.update = async (req, res) => {
    if(req.method == "POST"){
        const filter = { _id: new ObjectId(req.body.id) };
        console.log(filter);
        const update = { nome: req.body.nome };
        console.log(update);
        await Tarefa.findOneAndUpdate(filter, update).then(function (err, result) {
            console.log(req.body.nome);
            msg = "Tarefa atualizada com sucesso!";
            res.msg = msg;
            exports.list(req, res);
        });
    } else {
        await Tarefa.findOne({ _id : new ObjectId(req.params.tarefaId)}).then(function (result) {
            //console.log(result);
            res.render(`tarefa/update`, { doc : result });
        })
        
    }

}

exports.delete = async (req, res) => {
    var msg;
    await Tarefa.findOneAndDelete({ _id: new ObjectId(req.params.tarefaId) }).then(function (err, data) {
        msg = "Animal excluído com sucesso!";
        res.msg = msg;
        exports.list(req, res);
    });
}
