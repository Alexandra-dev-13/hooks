import React, { useState, useEffect } from 'react'
import PetList from './components/Pet/PetList'
import "bootstrap/dist/css/bootstrap.min.css"


export default function App() {
  const [pets, setPets] = useState([
    {
      id: 1,
      name: 'La belle et la bete',
      race: 'film',
      type: 'Western',
      location: '',
      adopted: false,
      photo: 'labelle.jpg'
    },
    {
      id: 2,
      name: 'Matrix',
      race: 'film',
      type: 'Western',
      location: '',
      adopted: false,
      photo: 'matrix.jpg'

    },
    {
      id: 3,
      name: 'Titanic 1',
      race: 'film Anglais',
      type: 'western',
      location: '',
      adopted: false,
      photo: 'titanic.webp'

    }, {
      id: 4,
      name: 'Titanic 2',
      race: 'film',
      type: 'Western',
      location: '',
      adopted: false,
      photo: 'titanic.webp'


    }, {
      id: 5,
      name: 'Matrix 2',
      race: 'film',
      type: 'Western',
      location: '',
      adopted: false,
      photo: 'matrix.jpg'

    }, {
      id: 6,
      name: 'La belle et la bete',
      race: 'film',
      type: 'western',
      location: '',
      adopted: false,
      photo: 'labelle.jpg'


    }
  ])

  const [keyword, setSearch] = useState('');

  const filter = () => {
    return keyword ? pets.filter(pet => pet.name.toLowerCase().includes(keyword.toLowerCase())
      || pet.race.toLowerCase().includes(keyword.toLowerCase())
      || pet.location.toLowerCase().includes(keyword.toLowerCase())
      || pet.type.toLowerCase().includes(keyword.toLowerCase())) : pets
  }

  const onChange = (event) => {
    setSearch(event.target.value)
  }

  const adopt = (id) => {
    const pet = { ...pets.find(p => p.id === id), adopted: true }

    const newPets = [...pets.filter(p => p.id !== id), pet]

    setPets(newPets)

  }

  useEffect(() => {

  })
  const filteredPets = filter(pets)
  return (
    <div>
      <h1 className="text text-center">React Hooks</h1>
      <input placeholder="Mots clés, nom, race, type, location" name="keyword" onChange={onChange} className="form-control container col-lg-6" />
      <PetList pets={filteredPets} adopt={adopt} />
    </div>
  )
}

