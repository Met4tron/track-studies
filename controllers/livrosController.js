const { Livros } = require('../models');

exports.getLivros = async (req, res) => {
    Livros.findAll()
        .then((data) => { 
            console.log(data);
            return res.json(data);
        })
        .catch((err) => console.log(err));
}