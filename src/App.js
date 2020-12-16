import React, { Component } from 'react';
import './App.css';
import Bike from './Bike/Bike';
import ErrorBaundery from './ErrorBaundery/ErrorBaundery';
import Nav from './Nav/Nav';

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      bikes: [
        { name: 'merida', year: 2016 },
        { name: 'cube', year: 2012 },
        { name: 'specialized', year: 2019 },
      ],
      title: 'road bike',
      shownBikes: false,
    };
  }

  onChangeName(name, id) {
    const bike = this.state.bikes[id];
    bike.name = name;
    const bikes = [...this.state.bikes];
    bikes[id] = bike;
    this.setState({
      bikes,
    });
  }
  onDeleteHandler = (id) => {
    const bikes = [...this.state.bikes];
    bikes.splice(id, 1);
    this.setState({ bikes });
  };
  showBikeHandler = () => {
    this.setState({
      shownBikes: !this.state.shownBikes,
    });
  };

  render() {
    return (
      <div className="App">
        <Nav />
        <h1>{this.state.title}</h1>

        <button onClick={this.showBikeHandler}>Shown Bike</button>
        {this.state.shownBikes
          ? this.state.bikes.map((item, id) => {
              return (
                <ErrorBaundery key={id}>
                  <Bike
                    name={item.name}
                    year={item.year}
                    onDelete={() => this.onDeleteHandler(id)}
                    onChangeName={(event) =>
                      this.onChangeName(event.target.value, id)
                    }
                  />
                </ErrorBaundery>
              );
            })
          : null}
      </div>
    );
  }
}

export default App;
