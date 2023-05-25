const connection = require('../connection');

module.exports = {
    getPokemons(callback) {
      const query = 'SELECT * FROM pokemons';
  
      connection.query(query, (error, results) => {
        if (error) {
          console.error('Error retrieving Pokemons:', error);
          return callback(error, null);
        }
  
        return callback(null, results);
      });
    },

    getPokemonById(id, callback) {
        const query = 'SELECT * FROM pokemons WHERE id = ?';
        connection.query(query, [id], (error, results) => {
          if (error) {
            console.error('Error retrieving Pokemon:', error);
            return callback(error, null);
          }
          if (results.length === 0) {
            return callback('Pokemon not found', null);
          }
          return callback(null, results[0]);
        });
      },

      createPokemon(pokemonData, callback) {
        const query = 'INSERT INTO pokemons SET ?';
        connection.query(query, pokemonData, (error, result) => {
          if (error) {
            console.error('Error creating Pokemon:', error);
            return callback(error, null);
          }
          return callback(null, result);
        });
      },

      updatePokemon(pokemonId, pokemonData, callback) {
        const query = 'UPDATE pokemons SET ? WHERE id = ?';
        connection.query(query, [pokemonData, pokemonId], (error, result) => {
          if (error) {
            console.error('Error updating Pokemon:', error);
            return callback(error, null);
          }
          return callback(null, result);
        });
      },

      deletePokemon(pokemonId, callback) {
        const query = 'DELETE FROM pokemons WHERE id = ?';
        connection.query(query, pokemonId, (error, result) => {
          if (error) {
            console.error('Error deleting Pokemon:', error);
            return callback(error, null);
          }
          return callback(null, result);
        });
      },


  };