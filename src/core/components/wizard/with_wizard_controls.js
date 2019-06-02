import React, { Component } from 'react'

const Controls = props => {
  return (
    <div>
      <button onClick={props.onClick} value={0}>prev</button>
      <button onClick={props.onClick} value={1}>next</button>
      <button onClick={props.onClick} value={2}>end</button>
    </div>
  )
}

export function WithWizardControls(WrappedComponent){
  return class extends Component{
    onClick = (e) => {
      this.props.onAction(parseInt(e.target.value))
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
  
