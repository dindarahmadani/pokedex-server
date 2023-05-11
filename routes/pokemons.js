const express = require('express');
const router = express.Router();
const connection = require('../connection')

router.get('/pokemons', (req, res) => {
    const sql = 'SELECT * FROM pokemons';
    connection.query(sql, (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

router.get('/pokemons/:id', (req, res) => {
    const pokemonId = req.params.id
    const sql = 'SELECT * FROM pokemons WHERE id = ?';
    connection.query(sql, [pokemonId], (err, results) => {
      if (err) throw err;
      res.json(results[0]);
    });
  });
  
  router.post('/pokemons', (req, res) => {
    const { id, name, avatar, moves } = req.body;
    const sql = 'INSERT INTO pokemons (id, name, avatar, moves) VALUES (?, ?, ?, ?)';
    connection.query(sql, [id, name, avatar, moves], (err, results) => {
      res.send({
        results,
        message: 'Pokemon added successfully'
      });
    });
  });
  
  router.put('/pokemons/:id', (req, res) => {
    const pokemonId = req.params.id
    const { name, avatar, moves } = req.body
    const sql = 'UPDATE pokemons SET name = ?, avatar = ?, moves = ? WHERE id = ?';
    connection.query(sql, [name, avatar, moves, pokemonId], (err, results) => {
      if (err) throw err;
      res.send({
        results,
        message: 'Pokemon Update successfully'
      });
    });
  });

  router.delete('/pokemons/:id', function(req, res, next) {
    var id = req.params.id;
    var sql = "DELETE FROM pokemons WHERE id = ?";
    connection.query(sql, [id], function(err, result) {
      if (err) throw err;
      res.send("Pokemon dengan id " + id + " berhasil dihapus");
    });
  });

module.exports = router;
