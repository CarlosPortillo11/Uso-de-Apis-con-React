import React from 'react';
import Axios from 'axios';

class Persons extends React.Component
{
    //Se crea un estado vacio para luego mandarle información desde el formulario.
    state = {
        name: '',
        id: "11"
    }

    handleChange = event =>  
    {
        this.setState({name:event.target.value});
        console.log(event.target.value)
    }

    makeChange = event => 
    {
        event.preventDefault();
        //Codigo para la API.

        const user = { name: this.state.name}
        
        Axios.post('https://jsonplaceholder.typicode.com/users', user)
        .then(res => 
                {
                    console.log(res);
                    console.log(res.data);
                }
            )
    }

    DeleteUser = event => 
    {
        event.preventDefault();

        const user = {name: this.state.id};

        Axios.delete('https://jsonplaceholder.typicode.com/users/{this.state.id}')
        .then(ret => 
                {
                    console.log(ret)
                    console.log(ret.data)
                }
            )
    }

    render()
    {
        return(
            <div>
                <form onSubmit={this.DeleteUser}>
                    <label className="text-blue-500">
                        Nombre:
                        <input type="text" name="name" className="border border-black rounded ml-5" onChange={this.handleChange} />
                    </label>
                    <br/>
                    <div className="flex justify-center w-full mt-10">
                        <button className="border border-black rounded mx-5 p-2" type="submit">Delete</button>
                    </div>
                </form>
            </div>
        )

    }


}

export default Persons;