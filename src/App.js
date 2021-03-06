import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/Home';

class App extends Component {
  state={
    userName: "Thomais",
    lessons: []
  }

  componentDidMount(){
    fetch(`https://teamthomais.herokuapp.com/lessons/${this.state.userName}`)
    .then((data)=>{
      console.log(data);
        return data.json();
    }).then((userLessons)=>{
        this.setState({
            lessons: userLessons
        })
    })
  }
  render() {
    return (
      <>
    <Switch>
      <Route exact path={'/'} component={() => <Home data={this.state.lessons}/>} />
      <Route component={() => <Home data={this.state.lessons}/>} />
    </Switch>
    </>
    );
  }
}


export default App;
