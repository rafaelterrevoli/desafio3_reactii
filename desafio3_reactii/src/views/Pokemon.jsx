import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Pokemon() {
    const [consult, setConsult] = useState({});
    const { name } = useParams();

    useEffect(() => {
        const getDataPokemon = async () => {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
            const results = await response.json();
            setConsult(results);
            console.log(results);
        };
        getDataPokemon();
    }, [name]);

    return (
        <>
            <div className="abs-center m-3">
                <h1 className="text-center mt-3">Pokemón</h1>
                <div className="mt-1">
                    <img src={consult?.sprites?.front_default} alt="Imagen Pokemon" />
                    <div>
                        <h3 className="text-center mt-3">Nombre: {consult?.name}</h3>
                        <ul>
                            {consult?.stats?.map((item, index) => (
                                <li key={index}>
                                    {item.stat.name} : {item.base_stat}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};
