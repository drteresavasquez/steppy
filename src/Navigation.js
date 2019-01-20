import React from 'react';
import { Menu } from 'semantic-ui-react'
import { Redirect } from 'react-router-dom';
import { Icon } from 'semantic-ui-react'
import './Navigation.css'

export default class Navigation extends React.Component {
    state={
        toDashboard: false,
        toAdmin: false
    }
    handleSubmit = () => {
        this.setState({
            toDashboard: true
          })
      }

    toAdmin = () => {
        this.setState({
            toAdmin: true
          })
    }

    render(){
        if (this.state.toDashboard) {
            return <Redirect to='/' />
          }
        
          if (this.state.toAdmin) {
            return window.location ='https://teamthomais.herokuapp.com/admin';
          }
        return(
            <Menu>
                 
                <Menu.Item
                name='home'
                onClick={this.handleSubmit}
                >
                <Icon name='home' size='big' />
                </Menu.Item>

                <Menu.Menu position='right'>
                    <Menu.Item
                    name='admin'
                    onClick={this.toAdmin}
                    >
                    <Icon name='cogs' size='big' />
                    </Menu.Item>
                </Menu.Menu>
            </Menu>
        )
    }
}