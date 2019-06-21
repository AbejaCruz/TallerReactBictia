import React, {Component} from 'react'


class Listado extends Component{
    render(){
        return(
            <div>
                <h1>
                    {this.props.tareas.nombre}
                </h1>
                <p>
                    {this.props.tareas.numero_canal}
                </p>
                <p>
                    {this.props.tareas.HD}
                </p>
              
                       
                
            </div>

        )
    }
}

export default Listado;