import { useState } from 'react';
import { Button } from './Button'
import { Input } from './Input'

export const Form = ({pokemon, setPokemon}) => {

    const [inputValue, setInputValue] = useState(pokemon);

    const onFormSubmit = (e) => {
        // Imprescindible para no recargar la página con submit del formulario
        e.preventDefault();
        // console.log(inputValue);
        setPokemon(inputValue);
    }

    return(
        <form className='form' onSubmit={onFormSubmit}>
            <Input inputValue={inputValue} setInputValue={setInputValue}/>
            <Button />
        </form>
    )
}