import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import AddLesson from './components/AddLesson';
import Steps from './components/Steps';
// import data from './data.json';

class App extends Component {
  state={
    userName: "thomais",
    lessons: []
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
      <>
    <Switch>
      <Route exact path={'/'} component={() => <Home data={this.state.lessons}/>} />
      <Route path="/:id" component={Steps} />
      <Route exact path={'/addlesson'} component={() => <AddLesson />} />
      <Route exact path={'/steps'} component={() => <Steps />} />
      {/* <Route component={() => <Home data={data}/>} /> */}
    </Switch>
    </>
    );
  }
}


export default App;
