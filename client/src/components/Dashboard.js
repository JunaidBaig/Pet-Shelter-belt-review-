import React from 'react'
import ListComponent from './ListComponent'
import { Link } from '@reach/router';



const Dashboard = ({listState}) => {
    
    return(
        <div>
            <div className="navbar">
            <h1>Pet Shelter</h1>
            <Link to="/pets/new">Add a pet to the shelter</Link>

            </div>
            <h3>These pets are looking for a good home</h3>
            <ListComponent listState={listState}/>
        </div>
    )

}
export default Dashboard