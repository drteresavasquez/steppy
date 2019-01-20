import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import './Steps.css';
export default class Steps extends Component {
    state={
        steps: this.props.data.steps,
        title: this.props.data.title,
        bgColor: this.props.data.color1,
        currentStep:0
    }

    nextLesson = (num)=>{
        this.setState({
            currentStep:num+1
          })
    }
        render(){
            const imgUrl = '../img/screen_plain.png';
            const divStyle = { 
                backgroundColor: `${this.state.bgColor}`
            };

            return(
            <div style={divStyle}>
            <div className="frame-container">
                <h1>Step {this.state.currentStep + 1}: {this.state.title}</h1>
                <div className="flex-container">
                    <p>{this.state.steps[this.state.currentStep].step_description}</p>
                    <img src={this.state.steps[this.state.currentStep].step_img} alt="this.props.step_description"/>
                </div>
                <Button 
                    content="Next Step"
                    size='massive'
                    primary
                    onClick={()=>{this.nextLesson(this.state.currentStep)}}
                />
            </div>
        </div>
        )
    } 
}