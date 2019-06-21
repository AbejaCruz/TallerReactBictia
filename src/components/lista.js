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
                    {this.props.tareas.HD.toString()}
                </p>
                <p>
                    {
                
                          /*this.props.tareas.programas.map(function(item,i){
                              console.log(item.length)
                              return <li>{item[i]}</li>
                          })*/
                         
                          this.props.tareas.programas.map((d) => <li>{"Nombre Programa: "+d.nombre+" Tipo: "+d.tipo}</li>
                          )
                       
                          
                
                    }
                </p>
               
              
                       
                
            </div>

        )
    }
}

export default Listado;