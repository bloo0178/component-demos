import React, { Component } from 'react';
import styles from './App.module.css';
import {Component1} from './components/Component1';
import {Component2} from './components/Component2';
import {Component3} from './components/Component3';
import {Component4} from './components/Component4';

class App extends Component {
  render() {
    return (
      <div className={styles.Container}>
        <Component1 />
        <Component2 />
        <Component3 />
        <Component4 />
      </div>
    );
  }
}

export default App;
