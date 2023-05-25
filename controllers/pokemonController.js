const PokemonModel = require('../models/pokemonModel');

module.exports = {
    getAllPokemons(req, res) {
        PokemonModel.getPokemons((error, results) => {
            if (error) {
                console.error('Error retrieving Pokemons:', error);
                res.status(500).send('Internal Server Error');
            } else {
                res.status(200).json(results);
            }
        });
    },

    getPokemonById(req, res) {
        const { id } = req.params;
        PokemonModel.getPokemonById(id, (error, result) => {
            if (error) {
                if (error === 'Pokemon not found') {
                    res.status(404).send('Pokemon not found');
                } else {
                    console.error('Error retrieving Pokemon:', error);
                    res.status(500).send('Internal Server Error');
                }
            } else {
                res.status(200).json(result);
            }
        });
    },

    createPokemon(req, res) {
        const pokemonData = req.body;
        PokemonModel.createPokemon(pokemonData, (error, result) => {
            if (error) {
                console.error('Error creating Pokemon:', error);
                res.status(500).send('Internal Server Error');
            } else {
                res.status(201).json(result);
            }
        });
    },

    updatePokemon(req, res) {
        const pokemonId = req.params.id;
        const pokemonData = req.body;
        PokemonModel.updatePokemon(pokemonId, pokemonData, (error, result) => {
          if (error) {
            console.error('Error updating Pokemon:', error);
            res.status(500).send('Internal Server Error');
          } else {
            res.status(200).json(result);
            
          }
        });
      },

      deletePokemon(req, res) {
        const pokemonId = req.params.id;
        PokemonModel.deletePokemon(pokemonId, (error, result) => {
          if (error) {
            console.error('Error deleting Pokemon:', error);
            res.status(500).send('Internal Server Error');
          } else {
            res.status(200).json(result);
          }
        });
      },


};