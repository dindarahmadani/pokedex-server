const express = require('express');
const router = express.Router();
const pokemonController = require('../controllers/pokemonController');


router.get('/pokemons', pokemonController.getAllPokemons);

router.get('/pokemons/:id', pokemonController.getPokemonById);
  
router.post('/pokemons', pokemonController.createPokemon);
  
router.put('/pokemons/:id', pokemonController.updatePokemon);

router.delete('/pokemons/:id', pokemonController.deletePokemon);

module.exports = router;
