import React, {useState} from 'react'
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import FormControl from '@material-ui/core/FormControl';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
// const TextField = (props) => {
//   const Type='input'
//   console.log(props.name,props.value)
//   return(
//     <div>
//       <label htmlFor={props.name}>{props.name}</label>
//       <Type {...props} key={null}/>
//     </div>
//   )
// } 

export function To(props){
  return(
    <React.Fragment>
    
	    <Grid container
			  direction="column"
			  justify="center"
			  alignItems="center"
			  spacing={2}
			  >
				
		    { Object.keys(props.wizardContext.to).map( (name,l)=>{
	    	return(
	    		<Grid item s={12}>
						<TextField 
			        name={name} 
			        onChange={props.onChange}
			        label={name}
			        value={props.wizardContext.to[name]}
			        variant='filled'
			        key={name+0}
			      />
		      </Grid>
	  		)
		    })}
	    </Grid>
    </React.Fragment>
  )
}

export function From(props)  {
  return(
     <React.Fragment>
    
	    <Grid container
			  direction="column"
			  justify="center"
			  alignItems="center"
			  spacing={2}
			  >
				
		    { Object.keys(props.wizardContext.from).map( (name,l)=>{
		    	// debugger
	    	return(
	    		<Grid item s={12}>
						<TextField 
			        name={name} 
			        onChange={props.onChange}
			        label={name}
			        value={props.wizardContext.from[name]}
			        variant='filled'
			        key={name+1}
			      />
		      </Grid>
	  		)
		    })}
		    
	    </Grid>
	    
    </React.Fragment>
  )
}

export function Weight(props)  {
	console.log(props)
  return(
      <React.Fragment>
      <Grid container
			  direction="column"
			  justify="center"
			  alignItems="center"
			  spacing={2}
			  >
			  <Grid item s={12}>
        <TextField 
          name={'weight'} 
          onChange={props.onChange} 
          label={'Weight'}
        /></Grid></Grid>
      </React.Fragment>
    )
}

export function Options(props)  {
  return(
    <React.Fragment>
    <Grid container
			  direction="column"
			  justify="center"
			  alignItems="center"
			  spacing={2}
			  >
			  <Grid item s={12}>
      <TextField 
        name={'options'} 
        onChange={props.onChange} 
        label={'Shipping Options'}
      /></Grid></Grid>
    </React.Fragment>
  )
}

export function Confirm(props)  {
  return(
      <React.Fragment>
        { props.wizardContext.toString()}
      </React.Fragment>
    )
}
// export default () => ({
//   from: {
//     name: "",
//     street: "",
//     city: "",
//     state: "",
//     zip: ""
//   },
//   to: {
//     name: "",
//     street: "",
//     city: "",
//     state: "",
//     zip: ""
//   },
//   weight: 0,
//   shippingOption: null
// })