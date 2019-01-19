import React, { Component } from 'react';
import data from './data.json'
import './App.css';
import { Button } from 'react-bootstrap';

class App extends Component {
  render() {
    const lessons = data.lessons.map((lesson, i)=>{
      return(
      <LessonTemplate
        key={i}
        title={lesson.title}
        color1={lesson.color1}
        color2={lesson.color2}
      />
      )
    })

    console.log(data.lessons);
    return (
      <div>
        {lessons}
      </div>
    );
  }
}

class LessonTemplate extends React.Component {
  render(){
    return(
      <>
        <h1>{this.props.title}</h1>
        <p>{this.props.color1}</p>
        <p>{this.props.color2}</p>
        <Button bsStyle="primary">Primary</Button>
      </>
    )
  }
}

export default App;
