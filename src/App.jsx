import { useState } from 'react'
import './App.css'
import Form from './components/Form'
import Modal from './components/Modal'

const typeColor = {
  bug: '#26de81', 
  dragon: '#ffeaa7', 
  electric:'#fed330',
  fairy: '#FF0069', 
  fighting: '#30336b', 
  fire: '#f0932b', 
  flying: '#81ecec', 
  grass: '#00b894', 
  ground: '#EFB549', 
  ghost: '#a55eea', 
  ice: '#74b9ff', 
  normal: '#95afc0', 
  poison: '#6c4ce7', 
  psychic: '#a29bfe', 
  rock: '#2d3436', 
  water: '#0190FF'

}

function App() {
  const [pokemon, setPokemon] = useState('')
  const [image, setImage] = useState()
  const [cardColor, setCardColor] = useState('')
  const [info, setInfo] = useState()


  const submitHandler = async (e) => {
    // to prevent form submission twice
    e.preventDefault();

    // Im just going to send a fetch request to the pokemon api. something simple. 
    let res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.toLowerCase()}`)

    // convert string to object
    let result = await res.json();


    // have to set both the image and color based on type to the state
    setImage(result.sprites.front_default)
    setCardColor(typeColor[result.types[0].type.name])
    setInfo(result)
    // had to make sure it was loading
    // console.log(result);




  }

  return (
    <div className="text-center">
      <h1 className=' text-4xl font-semibold my-16'>Hi, Welcome To My Take Home Assignment</h1>

     {/* Form component can be used multiple times if needed. */}
        <Form 
          submitHandler={submitHandler}
          setPokemon={setPokemon}
          image={image}
          cardColor={cardColor}
          info={info}
        />

        <Modal 
          name="Jorge"
          major="Genetics"
          interest="Web Development and Blockchain Development"
        />

   

    </div>
  )
}

export default App
