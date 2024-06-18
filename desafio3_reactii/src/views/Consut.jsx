
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Consult() {
  const [consult, setConsult] = useState([]);
  const [name, setName] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    async function getDataPokemon() {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon");
      const { results } = await response.json();
      setConsult(results);
    }
    getDataPokemon();
  }, []);

  return (
    <>
      <div className="abs-center m-5">
        <h1>Selecciona un pokemón</h1>
        <select className="form-select" value={name}
          onChange={(e) => { setName(e.target.value); }}>
          <option value="" disabled defaultValue>Selecciona el Pokemone</option>
          {consult.map(({ name }) => (<option key={name} value={name}>{name}</option>))}
        </select>
        <button className="btn btn-dark m-3" onClick={() => navigate(`/consult/pokemon/${name}`)}>
          Ver Detalle
        </button>
      </div>
    </>
  );
};

