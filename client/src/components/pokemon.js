import React, { Component } from 'react';
import './pokemon.css';
import { Row, Col, Table, Container } from 'react-bootstrap';

export class Pokemon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      team1: [],
      team2: [],
      pokemon: [],
      randomMove: [],
      team1Random: [],
      team2Random: []
    };
  }

  spinAgain() { //Need to fix chances of duplicate pokemon
    fetch('/api/pokemon')
    .then(res => res.json())
    .then(pokemon => this.setState({pokemon: pokemon.pokemon},
      this.setState({randomMove: pokemon.randomMove}),
      this.setState(state => {
        if(state.team1.length === state.team2.length){
          const team1 = []; 
          const team1Random = [];
          for(var i = 0; i < state.team1.length; i++){
            team1.push(state.team1[i]);
          }
          for(var z = 0; z < state.team1Random.length; z++){
            team1Random.push(state.team1Random[z]);
          }
          team1Random.push(state.randomMove);
          team1.push(state.pokemon[0]);
          return {team1, team1Random};
        }else{
          const team2 = []; 
          const team2Random = [];
          for(var n = 0; n < state.team2.length; n++){
            team2.push(state.team2[n]);
          }
          for(var p = 0; p < state.team2Random.length; p++){
            team2Random.push(state.team2Random[p]);
          }
          team2Random.push(state.randomMove);
          team2.push(state.pokemon[0]);
          return {team2, team2Random};
        }
      })
    ))
    // .then(() => {
    //   var teamImages = [];
    //   for(var i = 0; i < this.state.team1.length; i++){
    //     teamImages.push(this.state.team1[i])
    //   }
    //   for(var o = 0; o < this.state.team2.length; o++){
    //     teamImages.push(this.state.team2[o])
    //   }
    //   console.log(teamImages)
    //   for(var z = 0; z < teamImages.length; z++){
    //     var elem = document.createElement('img');
    //     elem.setAttribute("src", './sprites/' + teamImages[z].name + '.png')
    //     document.getElementById('picture').appendChild(elem)      
    //   }
    // });
  }

  componentDidUpdate() {
      if(this.state.team1.length === 6 && this.state.team2.length === 6){
        var f = document.getElementById('button');
        f.style.display = "none";
    }
  }

  componentDidMount() {
    fetch('/api/pokemon')
      .then(res => res.json())
      .then(pokemon => {this.setState({pokemon: pokemon.pokemon})
                        this.setState({team1: pokemon.pokemon})
                        this.setState({randomMove: pokemon.randomMove})
                        const team1Random = [];
                        team1Random.push(pokemon.randomMove);
                        this.setState({team1Random});
      })
      // .then(() => {
      //   var teamImages = [];
      //   for(var i = 0; i < this.state.team1.length; i++){
      //     teamImages.push(this.state.team1[i])
      //   }
      //   for(var o = 0; o < this.state.team2.length; o++){
      //     teamImages.push(this.state.team2[o])
      //   }
      //   console.log(teamImages)
      //   fetch('/api/images')
      // });
  }

  render() {
    return (
      <Container>
        <Row>
          <Container>
            <Col>
              <h2>Pokemon</h2> 
              <ul>
                {this.state.pokemon.map(pokemon => 
                  <li key={pokemon.id}> <img src={require('./sprites/' + pokemon.name + '.png')} alt={pokemon.name}></img> {pokemon.name} {pokemon.galar_dex} </li>
                )}
              </ul>
              <br/>

              <button id='button' onClick={() => this.spinAgain()}>Spin Again</button>
            </Col>
          </Container>
          <Col>
            <h2>Team 1</h2>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Sprite</th>
                  <th>Pokemon</th>
                  <th colSpan="4">Moves</th>
                </tr>
              </thead>
              {this.state.team1Random.map(team1Random => 
                <tbody>
                  <tr>
                    <td><img width='100px' height='100px' src={require('./sprites/' + team1Random[0] + '.png')} alt={team1Random[0]}></img></td>
                    <td>{team1Random[0]}</td>
                    <td>{team1Random[1][1]}</td>
                    <td>{team1Random[2][1]}</td>
                    <td>{team1Random[3][1]}</td>
                    <td>{team1Random[4][1]}</td>
                  </tr>
                </tbody>
              )}
            </Table>
          </Col>
          <Col>
            <h2>Team 2</h2>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Sprite</th> 
                  <th>Pokemon</th> 
                  <th colSpan="4">Moves</th>
                </tr>
              </thead>
              {this.state.team2Random.map(team2Random => 
                <tbody>
                  <tr>
                    <td><img width='100px' height='100px' src={require('./sprites/' + team2Random[0] + '.png')} alt={team2Random[0]}></img></td>
                    <td>{team2Random[0]}</td>
                    <td>{team2Random[1][1]}</td>
                    <td>{team2Random[2][1]}</td>
                    <td>{team2Random[3][1]}</td>
                    <td>{team2Random[4][1]}</td>
                  </tr>
                </tbody>
              )}
            </Table>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Pokemon;
