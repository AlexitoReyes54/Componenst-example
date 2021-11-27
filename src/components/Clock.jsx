import React from "react";

export default class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            owner:'luis'};
      }

      componentDidMount() {
        console.log("the component in on");
      }
    
      componentWillUnmount() {
        console.log("the component in off");
      }

      
    change() {
        this.setState({date:new Date()})
    }

    render() {
        setInterval(() => {
            this.change()
        }, 1000)

      return (
        <div>
          <h1>Hello, world!</h1>
          <h3>{this.state.date.toLocaleTimeString()}</h3>
        </div>
      );      
    }

    

    
  }

