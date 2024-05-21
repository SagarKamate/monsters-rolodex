import React from 'react';
import './App.css';
import LoadingBar from "react-top-loading-bar";
import { CardList } from './components/card-list/card-list.component';
import { Search } from './components/search/search.component';
import  { NotFound } from './components/notfound/notfound.component';
import { APP_NAME, NO_MONSTERS_FOUND, SEARCH_MONSTERS, LOADER_START_COUNT, LOADER_STEP_COUNT, LOADER_END_COUNT } from './utils/constants';
import './App.css';

class App extends React.Component{

  constructor(){
    super();

    this.state = {
      monsters :[],
      progress : {LOADER_STEP_COUNT},
      searchField : ''
    }; 
  }

  componentDidMount(){
    this.setProgress(LOADER_START_COUNT);
    this.setProgress(40);
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(response => this.setState({ monsters : response, progress: {LOADER_END_COUNT}}));
    //.then(response => this.setState({ monsters : response }));
  }

  handleChange = (e) =>{
    this.setState({ searchField : e.target.value});
  }

  setProgress = (count) => {
    this.setState({ progress : count});
  }

  render() {
    //const { monsters, searchField } = this.state;
    const { monsters, progress, searchField } = this.state;
    const filteredMonsters = monsters.filter( monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    
    return (
      <div>
        <LoadingBar color={'#82cc00'} shadow={true} progress={progress} onLoaderFinished={() => this.setProgress({LOADER_START_COUNT})}/>
        <div className="App">
            <h1>{APP_NAME}</h1>
            <Search placeholder={SEARCH_MONSTERS} handleChange={this.handleChange } />
            <CardList monsters={filteredMonsters}></CardList>
            <NotFound monsters={filteredMonsters} message ={NO_MONSTERS_FOUND}></NotFound>
        </div>
      </div>
    );
  }
    
}


export default App;
