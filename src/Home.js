import React, { Component } from 'react';
import data from './data.json'
import './App.css';
import { Button } from 'semantic-ui-react'
import { Container } from 'semantic-ui-react'

class Home extends Component {
  render() {

    const lessons = data.lessons.map((lesson, i)=>{
      return(
        <Button 
          content={lesson.title}
          size='massive'
          primary
        />
      )
    })

    return (
      <Container>
          {lessons}
      </Container>
    );
  }
}


export default Home;
