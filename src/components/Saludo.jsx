import React from "react";


export default class Saludo extends React.Component {
    constructor(props){
        super(props)
    }

    Hola(){
        console.log("dasd")
    }

    render() {
      return (
        <div>
          <h1>Hello, world!</h1>
          <h3>Saludo {this.Hola()} </h3> 
        </div>
      );      
    }


}

/*

*/