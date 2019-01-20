import React, { Component } from 'react';
import './Steps.css';
export default class Steps extends Component {
    state={
        steps: this.props.data.steps,
        title: this.props.data.title,
        currentStep:1
    }

    render(){
        const frames = this.state.steps.map((step, i)=>{
            return(
                <Frame 
                    key={i}
                    step={i+1}
                    title={this.state.title}
                    step_description={step.step_description}
                    step_img={step.step_img}
                />
    
            )
        })
        console.log(this.state.steps[1]);
        return(
            <>
            {frames}
            </>
        )
    }
}

class Frame extends Component {
    render(){
        return(
            <div className="frame-container">
                <h1>Step {this.props.step}: {this.props.title}</h1>
                <div className="flex-container">
                    <p>{this.props.step_description}</p>
                    <img src={this.props.step_img} alt="this.props.step_description"/>
                </div>
            </div>
        )
    }
}