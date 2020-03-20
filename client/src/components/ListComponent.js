import React from 'react'

import { Link } from '@reach/router';

const ListComponent = ({listState}) =>{
    return(
        <div>
            <table className="table table-dark">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Action</th>
                    </tr>
                </thead>
                {listState.map((item, i) =>(
                <tbody key={i}>
                    <tr>
                        <td>{item.name}</td>
                        <td>{item.type}</td>
                        <td>
                        <Link to={"/pets/"+item._id}>
                            Detail |
                        </Link>
                        <Link to={"/pet/"+item._id+ "/edit"}>
                            Edit
                        </Link>
                        </td>
                    </tr>
                </tbody>
                ))}
            </table>
        </div>
    )

}
export default ListComponent