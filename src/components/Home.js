import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import { Container } from 'semantic-ui-react';

import './../App.css';


class Home extends Component {
  state = {
    lessons: this.props.data,
    currentLesson: []
  }

  loadLesson = (id) => {
   console.log(this.state.lessons[id]);
   const thisLesson = this.state.lessons[id];
   this.setState({
    currentLesson: thisLesson
})
}

  showLesson = () => {
    return(
      <h1>{this.state.currentLesson.title}</h1>
     ) 
  }

  render() {
    const lessons = this.props.data.map((lesson, i)=>{
      return(
        <Button 
            key={lesson.id}
            content={lesson.title}
            size='massive'
            primary
            onClick={()=>{this.loadLesson(i)}}
        />
      )
    })

    return (
      <Container>
          {lessons}
          {this.showLesson()}
      </Container>
    );
  }
}

export default Home;
