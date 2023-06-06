const connection = require('../connection');

class Pokemon {
  // Models Pokemon
  static async getListPokemons() {
      const [rows] = await connection.execute('SELECT * FROM pokemons');
      return rows;
  }

  static async getPokemonById(id) {
      const [rows] = await connection.execute('SELECT * FROM pokemons WHERE id = ?', [id]);
      return rows[0];
  }

  static async addPokemon(name, avatar, type, weaknesses, description) {
      const [result] = await connection.execute('INSERT INTO pokemons (name, avatar, type, weaknesses, description) VALUES (?, ?, ?, ? ,?)', [name, avatar, type, weaknesses, description ]);
      const id = result.insertId;
      return { id, name, avatar, type, weaknesses, description };
  }

  static async updatePokemon(id, name, avatar, type, weaknesses, description) {
      await connection.execute('UPDATE pokemons SET name = ?, avatar = ?, type = ?, weaknesses = ?, description = ? WHERE id = ?', [name, avatar, type, weaknesses, description, id]);
      return { id, name, avatar, type, weaknesses, description };
  }

  static async deletePokemon(id) {
      await connection.execute('DELETE FROM pokemons WHERE id = ?', [id]);
      return true;
  }

}

module.exports = Pokemon;