import React from 'react';
import About from '../About/About';
import Counter from '../Counter/Counter';
import { Route, Switch } from 'react-router-dom';

const Nav = (props) => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <a href="/app">App</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/counter">Counter</a>
          </li>
        </ul>
      </nav>
      <Route path="/about" component={About} />
      <Route path="/counter" component={Counter} />
    </div>
  );
};
export default Nav;
