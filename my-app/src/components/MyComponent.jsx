import PropTypes from 'prop-types';

export const MyComponent = (props) => {
	return (
		<>
			<p>Hola Mundo</p>
			<span>{props.texto}</span>
			<br />
			<span>Suma = {props.numero}</span>
		</>
	);
};

// Tipado en variables
MyComponent.propTypes = {
	texto: PropTypes.string,
	numero: PropTypes.number,
};
