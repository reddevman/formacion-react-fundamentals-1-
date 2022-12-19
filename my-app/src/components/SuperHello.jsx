import { Hello } from './Hello';

export const SuperHello = () => {
    const myHello = () => {
        alert('Hola My Hello');
    }

    return (
        <Hello helloMethod={myHello} />
    )
}