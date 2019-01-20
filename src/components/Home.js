import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import { Container } from 'semantic-ui-react';
import Steps from './Steps';
import './../App.css';
import Nav from './../Navigation';
class Home extends Component {
  state = {
    lessons: this.props.data,
    currentLesson: [],
    showButtons: true,
    showLessons: false
  }

  loadLesson = (id) => {
    // console.log(this.state.lessons[id]);
    const thisLesson = this.state.lessons[id];
    this.setState({
      currentLesson: thisLesson,
      showLessons: true,
      showButtons: false
    })
}

  showOnDOM = () => {
    if(this.state.showButtons){
      const lessons =  this.props.data.map((lesson, i)=>{
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
      return(
        <Container>
          {lessons}
        </Container>
       
      )
    }else{
      return(
        <>
        <Steps data={this.state.currentLesson}/>
        </>
      )
    }
  }

  render() {
    return (
      <>
      <Nav />
          {this.showOnDOM()}
      </>
    );
  }
}

export default Home;
