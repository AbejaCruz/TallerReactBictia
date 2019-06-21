import React, {Component} from 'react'

class Formulario extends Component{
constructor(){
    super()
    this.state={
        titulo: '',
        nombre: ''
    }

    //bind enlaza los objetos
    this.handleCampo=this.handleCampo.bind(this)
    this.handleEnvio = this.handleEnvio.bind(this)
}

handleCampo(e){
    //Destructuring ES&
    const {value,name}=e.target
    //setState modificacion de un estado
    this.setState({
        [name]:value
    })
}

handleEnvio(e){
    e.preventDefault()
    this.props.onAgregarTarea(this.state) 
}
    render(){
        return(
            //ejecutar cuando se precione un boton onsubmit
            <div>
                <form method="POST" onSubmit={this.handleEnvio}>
                    <div>
                        <input
                            type="text"
                            name="nombre"
                            placeholder="Nombre"
                            onChange={this.handleCampo}
                        />
                        
                    </div>
                    <div>
                        <input 
                            type="text"
                            name="numero_canal"
                            placeholder="Numero Canal"
                            onChange={this.handleCampo}
                        />
                    </div>
                    <div>
                        <input 
                            type="text"
                            name="nhd"
                            placeholder="HD"
                            onChange={this.handleCampo}
                        />
                    </div>
                    <button type="submit">Enviar</button>

                </form>
            </div>
        )
    }
}
export default Formulario;