import React, { Component } from 'react';
import './pokemon.css';
import { Row, Col } from 'react-bootstrap';

export class Pokemon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      team1: [],
      team2: [],
      pokemon: []
    };
  }

  spinAgain() { //Need to fix chances of duplicate pokemon
    fetch('/api/pokemon')
    .then(res => res.json())
    .then(pokemon => this.setState({pokemon: pokemon}, 
      () => this.setState(state => {
        if(state.team1.length === state.team2.length){
          const team1 = []; 
          for(var i = 0; i < state.team1.length; i++){
            team1.push(state.team1[i])
          }
          team1.push(state.pokemon[0]) 
          return {team1}
        }else{
          const team2 = []; 
          for(var n = 0; n < state.team2.length; n++){
            team2.push(state.team2[n])
          }
          team2.push(state.pokemon[0]) 
          return {team2}
        }
      })
    ));
  }

  componentDidMount() {
    fetch('/api/pokemon')
      .then(res => res.json())
      .then(pokemon => {this.setState({pokemon})
                        this.setState({team1: pokemon})})
  }

  render() {
    return (
      <div>
        <Row>
          <Col>
            <h2>Team 1</h2>
            <ul>
              {this.state.team1.map(team1 => 
                <li key={team1.id}>{team1.name} {team1.galar_dex}</li>
              )}
            </ul>
          </Col>
          <Col>
            <h2>Pokemon</h2>
            <ul>
              {this.state.pokemon.map(pokemon => 
                <li key={pokemon.id}>{pokemon.name} {pokemon.galar_dex}</li>
              )}
            </ul>

            <button onClick={() => this.spinAgain()}>Spin Again</button>
          </Col>
          <Col>
            <h2>Team 2</h2>
              <ul>
                {this.state.team2.map(team2 => 
                 <li key={team2.id}>{team2.name} {team2.galar_dex}</li>
                )}
              </ul>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Pokemon;
