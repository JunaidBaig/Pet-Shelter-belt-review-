import React, {useEffect, useState} from 'react'
import {Router} from '@reach/router'
import axios from 'axios'
import Dashboard from './Dashboard';
import CreatePet from './CreatePet';
import DetailComponent from './DetailComponent';
import Update from './Update';

function Wrapper() {
    const [formState, setFormState] = useState({
        name:'',
        type:'',
        description:'',
        skill1:'',
        skill2:'',
        skill3:''
    });
    const [listState, setListState] = useState([])
    useEffect(() =>{
        axios.get("http://localhost:8000/api/pets")
        .then(res => {
            // console.log(res.data)
            setListState(res.data)
        })
        .catch(err => console.log("Error: ",err))
    }, [])
    // console.log(listState);
    const removeFromDom = petId => {
        console.log(petId)
        setListState(listState.filter(pet => pet._id !== petId));
    }
  return (
    <div className="container">
        <Router>
            <Dashboard path="/" listState={listState}/>
            <CreatePet path="pets/new" formState={formState} setFormState={setFormState}/>
            <DetailComponent path="pets/:id" removeFromDom={removeFromDom}/>
            <Update path="pet/:id/edit" formState={formState} setFormState={setFormState}/>
        </Router>
    </div>
  );
}

export default Wrapper;
