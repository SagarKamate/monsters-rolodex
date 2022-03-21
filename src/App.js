import React from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component';
import { Search } from './components/search/search.component';
import  { NotFound } from './components/notfound/notfound.component';
class App extends React.Component{

  constructor(){
    super();

    this.state = {
      monsters :[],
      searchField : ''
    }; 

    //this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(response => this.setState({ monsters : response}));
  }

  handleChange = (e) =>{
    this.setState({ searchField : e.target.value});
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter( monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
          <h1>Monsters Rolodex</h1>
          <Search placeholder="Search Monsters" handleChange={this.handleChange } />
          <CardList monsters={filteredMonsters}></CardList>
          <NotFound monsters={filteredMonsters} message ="No monsters found for this search criteria."></NotFound>
      </div>
    );
  }
    
}


export default App;
