import React from 'react'

export default function PetCard({ pet, adopt }) {
    const { id, name, race, type, location, photo, adopted } = pet;
    return (
        <div>
            <div className="card" style={{ width: "18rem", marginBottom: "3rem" }}>
                <img src={photo} className="card-img-top" alt={name} style={{ width: "287px", height:"200px"}}/>
                <div className="card-body">

                    <ul className="card-text">
                        <li>Name : {name}</li>
                        <li>Race : {race}</li>
                        <li>Type : {type}</li>
                        <li>Location : {location}</li>
                    </ul>
                    <button disabled={adopted} onClick={() => adopt(id)} className="btn btn-primary ">
                        Adopt
                    </button>
                </div>
            </div>
        </div>
    )
}
