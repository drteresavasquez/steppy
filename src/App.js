import React, { Component } from 'react';
import data from './data.json'
import './App.css';
import { Card } from 'semantic-ui-react'

class App extends Component {
  render() {
    console.log(data.lessons[0].steps);
    const lessons = data.lessons[0].steps.map((lesson, i)=>{
      return(
        <Card raised 
        key={i}
        image={lesson.step_img} />
      )
    })

    console.log(data.lessons);
    return (
      <div>
        <Card.Group itemsPerRow={3}>
          {lessons}
        </Card.Group>
      </div>
    );
  }
}

export default App;
