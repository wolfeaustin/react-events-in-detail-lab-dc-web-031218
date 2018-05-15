
import React from 'react'


class DelayedButton extends React.Component{

  handleClick = (e) => {
    e.persist() //keeps the event available whenever we call the callback
    setTimeout(() => this.props.onDelayedClick(e), this.props.delay)
  }

  render(){
    return(
      <button onClick = {this.handleClick}/>
    )
  }
}


export default DelayedButton
