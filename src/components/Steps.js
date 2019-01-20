import React, { Component } from 'react';
import { Button, Image, Modal } from 'semantic-ui-react'
import { Redirect } from 'react-router-dom';
import './Steps.css';
export default class Steps extends Component {
    state={
        toDashboard: false,
        steps: this.props.data.steps,
        title: this.props.data.title,
        bgColor1: this.props.data.color1,
        bgColor2: this.props.data.color2,
        currentStep:0
    }

    handleSubmit = () => {
        this.setState({
            toDashboard: true
          })
      }

    nextStep = (num)=>{
        this.setState({
            currentStep:num+1
          })
    }
    previousStep = (num)=>{
        this.setState({
            currentStep:num-1
          })
    }

    previousButton = () =>{
        if(this.state.currentStep!==0){
            return(
                <Button 
                    labelPosition='left'
                    content=" Previous Step"
                    size='large'
                    icon='arrow left'
                    color='pink'
                    onClick={()=>{this.previousStep(this.state.currentStep)}}
                />
            )
        }
    }

    nextButton = () => {
        if(this.state.currentStep+1 < this.props.data.steps.length){
            return(
                <Button
                    labelPosition='right'
                    content=" Next Step"
                    size='large'
                    icon='right arrow'
                    color='teal'
                    onClick={()=>{this.nextStep(this.state.currentStep)}}
                />
            )
        }else{
            return(
            <Button 
                    content=" Return Home"
                    size='large'
                    icon='home'
                    color='teal'
                    onClick={()=>{this.handleSubmit()}}
                />
            )
        }
    }
        render(){
            if (this.state.toDashboard) {
                return <Redirect to='/' />
              }

            const divStyle = { 
                backgroundImage:`linear-gradient(to right, ${this.state.bgColor1} 30%, ${this.state.bgColor2} 90%)`
            };

            return(
            <div style={divStyle}>
            <div className="frame-container">
                <h1 className="heading">Step {this.state.currentStep + 1}: {this.state.title}</h1>
                {ExampleModal(this.state.steps[this.state.currentStep])}
                <div className="flex-container">
                    <p className="stepItem">{this.state.steps[this.state.currentStep].step_description}</p>
                    <div className="stepItem"><img src={this.state.steps[this.state.currentStep].step_img} alt="this.props.step_description"/></div>
                </div>
                {this.previousButton()}
                {this.nextButton()}
            </div>
        </div>
        )
    } 
}

const ExampleModal = (example) => (
    <Modal trigger={<Button size='medium' color='purple'>See Example</Button>} closeIcon>
      <Modal.Header>Here is an example</Modal.Header>
      <Modal.Content image>
        <Image wrapped size='large' src={example.example_img} />
        <Modal.Description>
          <p>{example.ex_description}</p>
        </Modal.Description>
      </Modal.Content>
    </Modal>
  )

  