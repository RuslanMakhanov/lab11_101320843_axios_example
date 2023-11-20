import React, { Component } from 'react'
import axios from 'axios';
import '.././index.css';

class PersonList extends Component {
    // Define the initial state
    state = {
        persons: []
    };

    // Lifecycle method to fetch data after the component mounts
    componentDidMount() {
        axios.get('https://randomuser.me/api/?results=10')
            .then(res => {
                // Logging the response to the console
                console.log(res.data);
                // Updating the state with the fetched data
                const persons = res.data.results;
                this.setState({ persons });
            })
            .catch(error => {
                console.error('Error fetching data: ', error);
            });
    }

    // Render method to display the content
    render() {
        return (
            <div>
                <h2>User List</h2>
                <ul>
                    {this.state.persons.map(person => (
                        <li key={person.email}>
                            <a>{person.name.title}  {person.name.first} {person.name.last} - {person.login.uuid}</a> <br></br>
                            <img src={person.picture.large}></img><br></br>
                            User Name: <a>{person.login.username}</a> <br></br>
                            Gender: {person.gender}<br></br>
                            Time Zone Description: {person.location.timezone.description}<br></br>
                            Address: {person.location.street.name}<br></br>
                            Email: {person.email}<br></br>
                            Birth Date and Age: {person.dob.date}<br></br>
                            Register Date: {person.registered.date}<br></br>
                            Phone#: {person.phone}<br></br>
                            Cell#: {person.cell}<br></br>
                            <button>Detail</button>
                           
                            
                        </li>
                        
                    ))}
                </ul>
            </div>
        );
    }
}

export default PersonList;
