import React, { useState, useEffect} from 'react';
import styled from '@emotion/styled'
import Frase from './components/Frase';

const Contenedor = styled.div`
  display: flex;
  align-items: center;
  padding-top: 5rem;
  flex-direction: column;
`;

const Boton = styled.button`
  background: -webkit-linear-gradient(top left, #007d35 0%, #007d35 40%, #0f574e 100%);
  background-size: 300px;
  font-family: Arial, Helvetica, sans-serif;
  color: #fff;
  margin-top: 3rem;
  padding: 1rem 3rem;
  font-size: 2rem;
  border: 2px solid black;
  cursor:pointer;
  box-shadow: 2px 3px 1px rgba(0,0,0,0.4);
  border: none;
  border-radius: 20px;
  outline: none;
  transition: background-size -.4s ease;

  :hover {
    opacity: 0.5;
    color: rgba(0,0,0,0.7)
    background-size: 400px;
  }
  `;

function App() {

  const [ frase, guardarFrase] = useState({})

  useEffect(() => {
    consultarAPI()
  }, [])

  const consultarAPI = async () => {
    const api = await fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes' )
    const frase = await api.json()
    guardarFrase(frase[0])
    
  }

  
  return (
    <Contenedor>
      <Frase
      frase = {frase}
      />
          <Boton
          onClick = {consultarAPI}>
      Obtener frase
    </Boton>
    </Contenedor>

  );
  }

export default App;
