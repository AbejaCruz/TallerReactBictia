import React,{Component} from 'react';
import {canales} from './canales.json';
import Listado from './components/lista';
//Nueva Linea--------
import Formulario from './components/formulario'
//-----------
class App extends Component {
constructor(){
  super();
  this.state={
    canales
  }

  //Nueva linea ------
  this.handleAgregarTarea=this.handleAgregarTarea.bind(this)
  //-------
}
//Nueva linea -------

handleAgregarTarea(listaNueva){
  this.setState({
    //ES6 Spread Operator -> en el cual podemos reemplazar parametros de un array
    canales:[...this.state.canales,listaNueva]
  })
}

//----------
render(){
  const lista=this.state.canales.map((tarea,i)=>{ //map es funcion de esmac 6 que recrre
    return(
      <Listado tareas={tarea} key={i}/>
    )
  })
  return(
    <div className="Container">
      <div>
        <span className="contador">
          {this.state.canales.length}

        </span>
      </div>
      <div>
        <Formulario onAgregarTarea={this.handleAgregarTarea}/>
      </div>
      <div>
        {lista}
      </div>
    </div>
  );
}

}


export default App
