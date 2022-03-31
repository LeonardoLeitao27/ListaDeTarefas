import React, { Component } from 'react';

import './main.css';

export default class Main extends Component {
  state = {
    NovaTarefa: ' ',
  };

  inputMudou = (e) => {
    this.setState({
      NovaTarefa: e.target.value,
    });
  }

  render() {
    const { NovaTarefa } = this.state;

    return (
      <div className="main">
        <h1>Lista de tarefas</h1>

        <form action="#">
          <input onChange={this.handleChange} type="text" />
          <button type="submit">Enviar</button>
        </form>
      </div>
    );
  }
}
