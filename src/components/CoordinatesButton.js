
import React from 'react'

class CoordinatesButton extends React.Component{

  handleEvent = (e) => {
    this.props.onReceiveCoordinates([e.clientX, e.clientY])
  }

  render(){
    return(
      <button onClick = {this.handleEvent}/>
    )
  }
}


export default CoordinatesButton
