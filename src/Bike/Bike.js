import React, { Component } from 'react';
import classes from './Bike.module.css';
import WithClasses from '../hoc/withClasses';

class Bike extends Component {
    render() {
        // if(Math.random() > 0.7){
        //     throw new Error('Bike random fail')
        // }
        return (
            <>
                <h3>Bike name: {this.props.name} </h3>
                <p>Year:<strong>{this.props.year}</strong></p>
                <input type="text" onChange={this.props.onChangeName}  value={this.props.name}/>
                <button onClick={this.props.onDelete}>delite</button>
            </>
        )
    }
}


export default WithClasses(Bike, classes.Bike)