var express = require('express');
var router = express.Router();
var pokemonController = require('../controllers/pokemons');

router.get('/pokemons', pokemonController.getListPokemons);

router.get('/pokemons/:id', pokemonController.getPokemonById);

router.post('/pokemons', pokemonController.addPokemon);

router.put('/pokemons/:id', pokemonController.updatePokemon);

router.delete('/pokemons/:id', pokemonController.deletePokemon);


module.exports = router;