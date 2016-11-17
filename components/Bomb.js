const React = require('react')

class Bomb extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      secondsLeft: this.props.initialCount
    }
  }
  result(){
    if(this.state.secondsLeft === 0){
      return "Boom!"
    }else{
      return `${this.state.secondsLeft} seconds left before I go boom!`
    }
  }

  render() {
    return(
      // <h1>{this.state.secondsLeft} seconds left before I go boom!</h1>
      <h1>{this.result()}</h1>
    )
  }
}

module.exports = Bomb
