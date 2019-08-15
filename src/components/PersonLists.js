import React from 'react';
import Axios from 'axios';

class PersonList extends React.Component
{
    //Declarando el estado con un atributo array dentro de el.

    state = {
        persons:[]
    }

   //A realizar el consumo de la API

    componentDidMount()
    {
        //Al elemento get o post en Axios su argumento sera la URI.
        Axios.get('https://jsonplaceholder.typicode.com/users')
        //El elemento then le indica que lo que consuma de la API lo guarde dentro de rest
        .then(res => 
                {
                    //Se le especifica que pase solo la data a la variable persons.
                    const persons = res.data;
                    //Mandararemos el cambio de estado
                    this.setState({persons}); 
                    //Ahora el estado ya no estará vacio como fue declarado arriba, sino que poseera la data de la API consumida.
                }
            )
    }


    render()
    {
        return(
            <ul>
                {this.state.persons.map(persons => <li>{persons.name}</li>)}
            </ul>
        )
    }
}

export default PersonList;
