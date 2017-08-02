import React, {Component} from 'react';
import Stateless from './stateless';

export default class Main extends Component {


  render() {
    return (
     <div style={{textAlign: 'center'}}>
        <h1>Hello</h1>
        <Stateless name={"world"} />
      </div>);
  }
}
