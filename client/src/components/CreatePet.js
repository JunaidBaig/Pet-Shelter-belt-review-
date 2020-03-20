import React, {useState} from 'react'
import axios from 'axios'
import { Link, navigate } from '@reach/router';


const CreatePet = ({formState, setFormState}) => {
    const [errState, setErrState] = useState([])

    const handleChange = (e) =>{
        setFormState({
            ...formState,
            [e.target.name] : e.target.value
        })
    }
    const handSubmit = (event) =>{
        event.preventDefault()
        axios.post("http://localhost:8000/api/pets", formState)
            .then(res =>{
                console.log(res)
                setFormState({
                    name:'',
                    type:'',
                    description:''
                })
                console.log(formState)
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
        <h3>Knowing a pet needing home?</h3>
        <form onSubmit={handSubmit} className="form-group">
        {errState.map((err, index) => <p key={index}>{err}</p>) }
            <p>
                Name:
                <input type="text" name="name" onChange={handleChange} className="form-control"/>
                {/* {(errState.name)? <small className="ml-1 text-danger font-weight-bold">WRONG</small>:null} */}
            </p>
            <p>
                Type:
                <input type="text" name="type" onChange={handleChange} className="form-control"/>
                {/* {(errState.type)? <small className="ml-1 text-danger font-weight-bold">WRONG</small>:null} */}
            </p>
            <p>
                Description:
                <input  type="text" name="description" onChange={handleChange} className="form-control"/>
                {/* {(errState.description)? <small className="ml-1 text-danger font-weight-bold">WRONG</small>:null} */}
            </p>
            <p>
                Skill 01:
                <input  type="tet" name="skill" onChange={handleChange} className="form-control"/>
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
export default CreatePet;