import { useState, useEffect } from 'react';
import { callPokeApi } from './api/api';
import { Form } from './components/Form';
import { Img } from './components/Img';
import './App.css';

/* Componentes */
/**
 * 1- Padre
 *  .2- Imagen
 *  .3- Texto
 *  .4- Formulario -> Input y Botón
 *
 */

function App() {
	const defaultPokemon = 'charmander';
	const [pokemon, setPokemon] = useState(defaultPokemon);
	const [imgURL, setImgURL] = useState('');

	// Se dispara useEffect cada vez que se cambia el nombre de pokemon
	useEffect(() => {
		// Petición API
		if (pokemon) {
			callPokeApi(pokemon)
				.then((response) => {
					// console.log(response.sprites.other.home.front_default);
					const { front_default: imgPoke } = response.sprites.other.home;
					setImgURL(imgPoke);
				})
				.catch((error) => alert(error.message));
		}
	}, [pokemon]);

	return (
		<div className='container'>
			<Img src={imgURL} altText={'imagen pokemon'} />
			<Form pokemon={pokemon} setPokemon={setPokemon} />
		</div>
	);
}

export default App;
