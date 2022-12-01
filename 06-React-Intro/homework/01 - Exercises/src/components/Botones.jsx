import React from "react";

class Botones extends React.Component{
    render(){
        // console.log(React);
        const alerta = this.props.alerts;
        console.log(this.props.alerts);
        return <div>
            <button onClick={()=>{
                alert("soy el modulo 1")
            }}>Módulo 1</button>
            <button onClick={()=>{
                alert("soy el modulo 2")
            }}>Módulo 2</button>
        </div>
    }
}
export default Botones