import { useState, useEffect } from 'react';
import './App.css';
import { Hello } from './components/Hello';
import { MyComponent } from './components/MyComponent';
import { PrintColor } from './components/PrintColor';
import { Super } from './components/Super';
import { SuperHello } from './components/SuperHello';

function App() {
	const [counter, setCounter] = useState(0);
	const varTexto = 'Esto es una propiedad';
	const helloMethod = () => {
		setCounter(counter + 1);
		alert(`Hola PACO + ${counter}`);
	};

	/* useEffect(callback[, dependencies]);
	// El parámetro de dependencia sirve para indicar hasta cuando ejecutar el useEffect
	// Ejecuta el callback sólo si la dependencia(elemento) ha cambiado entre renderizados
	// Por lo tanto la ejecución del useEffect depende de cuando se renderiza un elemento
	// Por ejemplo en el caso de peticiones a una API interesa usarlo para no estar haciendo
	peticiones continuas a la API
	// Las llaves de la dependencia vacía indica que sólo se ejecute 1 vez el hook
	*/

	/*
	useEffect(() => {
	  Línea de código de ejecución del script de petición (callback)
	}, [dependencia])
	*/

	useEffect(() => {
	  console.log("render");

	  return () => {
		// return de limpieza
		// Se usa para limpiar eventos, setInterval, etc
	  }
	}, [])


	return (
		<>
			{' '}
			{/* Comentario: Fragment */}
			<h1>Encabezado</h1>
			<Super>
				<MyComponent texto={varTexto} numero={2 + 2} />
				<br />
				<Hello helloMethod={helloMethod} />
			</Super>
			<SuperHello />
			<PrintColor />
		</>
	);
}

export default App;
