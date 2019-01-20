import React, { Component } from 'react';
import { Button, Image, Modal } from 'semantic-ui-react'
import { Redirect } from 'react-router-dom';
import './Steps.css';
export default class Steps extends Component {
    state={
        toDashboard: false,
        steps: this.props.data.steps,
        title: this.props.data.title,
        bgColor: this.props.data.color1,
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
                    content=" Previous Step"
                    size='massive'
                    icon='arrow left'
                    primary
                    onClick={()=>{this.previousStep(this.state.currentStep)}}
                />
            )
        }
    }

    nextButton = () => {
        if(this.state.currentStep+1 < this.props.data.steps.length){
            return(
                <Button 
                    content=" Next Step"
                    size='massive'
                    icon='arrow right'
                    primary
                    onClick={()=>{this.nextStep(this.state.currentStep)}}
                />
            )
        }else{
            return(
            <Button 
                    content=" Return Home"
                    size='massive'
                    icon='home'
                    primary
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
                backgroundColor: `${this.state.bgColor}`
            };

            return(
            <div style={divStyle}>
            <div className="frame-container">
                <h1>Step {this.state.currentStep + 1}: {this.state.title}</h1>
                {ExampleModal(this.state.steps[this.state.currentStep])}
                <div className="flex-container">
                    <p>{this.state.steps[this.state.currentStep].step_description}</p>
                    <img src={this.state.steps[this.state.currentStep].step_img} alt="this.props.step_description"/>
                </div>
                {this.previousButton()}
                {this.nextButton()}
            </div>
        </div>
        )
    } 
}

const ExampleModal = (example) => (
    <Modal trigger={<Button size='small'>Example</Button>}>
      <Modal.Header>Here is an example</Modal.Header>
      <Modal.Content image>
        <Image wrapped size='medium' src={example.example_img} />
        <Modal.Description>
          <p>{example.ex_description}</p>
        </Modal.Description>
      </Modal.Content>
    </Modal>
  )
  