import React from 'react'
import PetCard from './PetCard.js';

export default function PetList(props) {
    const { pets, adopt } = props;
    return (
        <div>
            <h1 className="text text-center mb-5">Pet List</h1>
            <div className="container">
                <div className="row">
                    {pets.map((pet) => (
                        <div className="col-12 col-md-4 col-ld-3" key={pet.id}>
                            <PetCard pet={pet} adopt={adopt} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
