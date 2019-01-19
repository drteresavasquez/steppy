import React, { Component } from 'react';
import data from './data.json'
import './App.css';
import { Button } from 'semantic-ui-react'
import { Container } from 'semantic-ui-react'

class App extends Component {
  render() {

    const lessons = data.lessons.map((lesson, i)=>{
      return(
        <Button content={lesson.title} primary />
      )
    })

    console.log(data.lessons);
    return (
      <Container>
        {lessons}
      </Container>
    );
  }
}


export default App;
