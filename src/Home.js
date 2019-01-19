import React, { Component } from 'react';
// import data from './data.json'
import './App.css';
import { Button } from 'semantic-ui-react'
import { Container } from 'semantic-ui-react'

class Home extends Component {
  render() {
      console.log(this.props.data);
    const lessons = this.props.data.map((lesson, i)=>{
      return(
        <Button 
            key={i}
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
