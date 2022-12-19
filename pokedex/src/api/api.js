const API_URL = 'https://pokeapi.co/api/v2/pokemon/';

export const callPokeApi = async (pokemonName) => {
	try {
        const res = await fetch(`${API_URL}${pokemonName}`);
        return await res.json();
    } catch (e) {
        return console.error;
    }
};
