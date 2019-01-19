import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Home from './Home';
import data from './data.json';

class App extends Component {
  state={
    userName: "thomais"
  }

  componentDidMount(){
    fetch(`https://teamthomais.herokuapp.com/lessons/${this.state.userName}`)
    .then((data)=>{
      console.log(data);
        // return data.json();
    }).then((userLessons)=>{
        this.setState({
            lessons: userLessons
        })
        console.log(userLessons)
    })
  }


  render() {
    return (
    <h1>This is a page</h1>
    // <Route exact path={'/'} component={() => <Home data={this.state.lessons}/>} />
    );
  }
}


export default App;
