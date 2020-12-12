import React, { Component } from 'react';


export default class Counter extends Component {
    state = {
        counter: 0
    }
    onPlas = () => {
      this.setState((prevState) => {
          return {
            counter : prevState.counter + 1
          } 
      })
    }
    
    render() {
        return (
          <>
          <h1>Counter {this.state.counter}</h1>
          <button onClick={this.onPlas}>Plus</button>
          <button onClick={() => this.setState({counter: this.state.counter - 1})}>Minus</button>
          </>
        )
    }

}