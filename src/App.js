import React, { Component } from 'react';
import background from './images/Group.svg';
import styles from './App.module.css';
import {Component1} from './components/Component1';
import {Component2} from './components/Component2';

class App extends Component {
  render() {
    return (
      <div className={styles.Container}>
        <Component1 />
        <Component2 />
      </div>
    );
  }
}

export default App;
