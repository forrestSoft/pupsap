import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';

const Controls = props => {
  return (
    <Container>
      
        <Button onClick={props.onClick} value={0}  variant="contained" color="primary">prev</Button>
        <Button onClick={props.onClick} value={1}  variant="contained" color="primary">next</Button>
        <Button onClick={props.onClick} value={2}  variant="contained" color="primary">end</Button>
      
    </Container>
  )
}

export function WithWizardControls(WrappedComponent){
  return class extends Component{
    onClick = (e) => {
      // debugger
      this.props.onAction(parseInt(e.currentTarget.value))
    }
    render(){ 
      return (
        <React.Fragment>
          <WrappedComponent {...this.props} />
          <Controls onClick={this.onClick} />
        </React.Fragment>
      )
    }
  }
}


export function WithWizardView(WrappedComponent, RenderProps, name){
  return class extends Component{
    render(){ 
      // this.stepName = name
      return (
        <React.Fragment>
          <WrappedComponent {...this.props} stepName={name}>
            <RenderProps {...this.props} onChange={this.onChange} blah={123} />
          </WrappedComponent>
        </React.Fragment>
      )
    }
  }
}
  
