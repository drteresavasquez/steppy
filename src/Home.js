

import React, { Component } from 'react';
//import data from './data.json'
import { Button } from 'semantic-ui-react'
import { Container } from 'semantic-ui-react'
import './App.css';


class Home extends Component {
  render() {
    const lessons = this.props.data.Thomias.map((lesson, i)=>{
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
