import React, { Component } from 'react';
// import data from './data.json'
import { Button } from 'semantic-ui-react'
import { Container } from 'semantic-ui-react'

class Home extends Component {

  openLesson = (id) => {
    console.log("Lesson id", id);
  }

  render() {
    const lessons = this.props.data.map((lesson)=>{
      return(
        <Button 
            key={lesson.id}
            content={lesson.title}
            size='massive'
            primary
            onClick={()=>{this.openLesson(lesson.id)}}
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