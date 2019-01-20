import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import { Container } from 'semantic-ui-react';
import Steps from './Steps';
import './../App.css';


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
      return(
        this.props.data.map((lesson, i)=>{
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
      )
    }else{
      return(
        <>
        {/* <h1>{this.state.currentLesson.title}</h1> */}
        <Steps data={this.state.currentLesson}/>
        </>
      )
    }
  }

  render() {
    return (
      <Container>
          {this.showOnDOM()}
      </Container>
    );
  }
}

export default Home;
