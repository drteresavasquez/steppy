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
    const thisLesson = this.state.lessons[id];
    this.setState({
      currentLesson: thisLesson,
      showLessons: true,
      showButtons: false
    })
}

  showOnDOM = () => {
    const style = {
      textAlign: "center"
    }
    if(this.state.showButtons){
      const lessons =  this.props.data.map((lesson, i)=>{
        return(
          <>
          <Button
              style={{backgroundImage:`linear-gradient(to bottom, #${lesson.color1} 30%, #${lesson.color2} 90%)`, height:`200px`, borderRadius:`30px`, margin:`15px`}}
              key={lesson.id}
              content={lesson.title}
              size='massive'
              primary
              onClick={()=>{this.loadLesson(i)}}
          />
          </>
        )
        })
      return(
        <Container style={style}>
          <h1 className="heading">Hey, Thomais! Let's Learn Some Stuff!</h1>
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
