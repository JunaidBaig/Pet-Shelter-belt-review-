import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { Link, navigate } from '@reach/router'

const DetailComponent = ({removeFromDom,id}) => {
    const [pet, setPet] = useState({})
    useEffect(() => {
        axios.get('http://localhost:8000/api/pets/'+ id)
            .then(res => setPet({
                ...res.data
            }))
            .catch(err => console.log(err))
    }, [])
    const deleteAuthor = () => {
        axios.delete('http://localhost:8000/api/pets/' + id)
            .then(res => {
                removeFromDom(id)
                navigate('/')
            })
    }
    return(
        <div>
            <div className="navbar">
            <h1>Pet Shelter</h1>
            <Link to='/'> Back to home</Link>
            </div>
            <h3>Detail about: {pet.name}</h3>
            <button type="submit" className="btn btn-danger" onClick={deleteAuthor}>
                        Adopt {pet.name}
                    </button>
            <div className="jumbotron">
                <h4>Pet Type: {pet.type}</h4>
                <h4>Description: {pet.description}</h4>
                <h4>Skills: {pet.skill}</h4>
            </div>

        </div>
    )
}
export default DetailComponent