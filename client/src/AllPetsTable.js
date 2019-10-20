import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css"

class AllPetsTable extends Component {
    constructor (props){
        super (props);
        this.state = {
            pets:[]
        }
    }
componentDidMount (){
    axios.get ("http://localhost:8000/api/pet")
        .then (res => {
            this.setState({pets:res.data})})
        .catch(err => console.log (err));
}
    render () {
        return (  
            <div className="container-fluid">
                <h3 className="display-4" >These pets are looking for a home!</h3>
                <table className="table table-striped table-dark">
                <tbody >
                    <tr bgcolor="">
                        <th>Name</th>
                        <th>Type</th>
                        <th>Actions</th>
                    </tr>
                {
                    this.state.pets.map(p =>
                    <tr key = {p._id}>
                        <td>{p.Name}</td>
                        <td>{p.Type}</td>
                        <td>
                        <Link  to={"/pet/" + p._id}>Details</Link>
                        &nbsp;|&nbsp;
                        <Link  to ={ "/edit/" + p._id}>Edit</Link>
                        </td>
                     </tr>
                    )
                }
                </tbody>
                </table>
                <Link to="/new"><button>Add a Pet to the Shelter</button></Link>
          </div>
        );
    }
}

export default AllPetsTable;