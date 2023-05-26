var connection = require('../connection');

class MyPokemon {
    static async addToMyPokemon(user_id, pokemon_id) {
        const result = await connection.execute('INSERT INTO mypokemons (user_id, pokemon_id) VALUES (?, ?)', [user_id, pokemon_id]);
        const id = result.insertId;
        return { id, user_id, pokemon_id };
    }

    static async getListMyPokemons() {
        const [rows] = await connection.execute('SELECT * FROM mypokemons');
        return rows;
    }

    static async getMyPokemonById(pokemon_id) {
        const [rows] = await connection.execute('SELECT * FROM mypokemons WHERE pokemon_id = ?', [pokemon_id]);
        return rows[0];
    }

    static async deleteMyPokemon(id) {
        await connection.execute('DELETE FROM mypokemons WHERE id = ?', [id]);
        return true;
    }

}

module.exports = MyPokemon;