'use client'
import { useState } from 'react'

export const Cont = ({value1, agreg, maxvalue, minvalue}) => {
    let padraoCont = value1;
    let casas = agreg


    const [cont, setContador] = useState(padraoCont);

    const add = () => {
        setContador(cont > maxvalue ? cont : cont + casas);
    }

    const remove = () => {
            setContador(cont < minvalue ? cont : cont - casas);
    }

    const reset = () => {
        setContador(padraoCont);
    }

    return(
        <div>
        <h1>State</h1>
        <button onClick={add}>Add</button>
        <button onClick={remove}>Remove</button>
        <button onClick={reset}>Reset</button>
        <p>contagem: {cont}</p>
    </div>
    );
}