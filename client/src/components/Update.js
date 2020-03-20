import React, {useEffect,useState} from 'react'
import axios from 'axios'
import { Link, navigate } from '@reach/router';


const Update = ({id}) => {
    const [errState, setErrState] = useState([])
    const [petState, setPetState] = useState({
        name:'',
        type:'',
        description:''
    })

    const handleChange = (e) =>{
        setPetState({
            ...petState,
            [e.target.name] : e.target.value
        })
    }

    useEffect(() => {
        axios.get('http://localhost:8000/api/pets/'+ id)
            .then(res => setPetState({
                ...res.data
            }))
            .catch(err => console.log(err))
    }, [])
    const handSubmit = (event) =>{
        event.preventDefault()
        axios.put("http://localhost:8000/api/pets/"+ id + "/edit", petState)
            .then(res =>{
                console.log(res)
                navigate("/")
            })
            .catch(err => {
                const {errors} = err.response.data;
                const errorArr = []
                for(const key of Object.keys(errors)){
                    errorArr.push(errors[key].message)
                }
                setErrState(errorArr)
            })
    }
    return(
        <div>
            <div className="navbar">
                <h1>Pet Shelter</h1>
                <Link to='/'> Back to home</Link>
            </div>
            <h3>Edit {petState.name}</h3>
            <form onSubmit={handSubmit} className="form-group">
            {errState.map((err, index) => <p key={index}>{err}</p>) }
                <p>
                    Name:
                    <input type="text" value={petState.name} name="name" onChange={handleChange} className="form-control"/>
                </p>
                <p>
                    Type:
                    <input type="text" value={petState.type} name="type" onChange={handleChange} className="form-control"/>
                </p>
                <p>
                    Description:
                    <input  type="text" value={petState.description} name="description" onChange={handleChange} className="form-control"/>
                </p>
                <p>
                    Skill 01:
                    <input  type="text" value={petState.skill} name="skill" onChange={handleChange} className="form-control"/>
                </p>
                <p>
                    Skill 02:
                    <input  type="text" name="skill" onChange={handleChange} className="form-control"/>
                </p>
                <p>
                    Skill 03:
                    <input  type="text" name="skill" onChange={handleChange} className="form-control"/>
                </p>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}
export default Update;