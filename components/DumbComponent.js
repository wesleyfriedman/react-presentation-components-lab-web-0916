const React = require('react');
const { Component } = require('react')

class DumbComponent extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this)

    this.state = {
      mood: 'happy'
    }

  }

  handleClick() {
    let mood = this.state.mood === 'happy' ? 'sad' : 'happy'
    this.setState( {
      mood: mood
    })
  }


  render() {
    return (
      <div onClick={this.handleClick}>{this.state.mood}</div>
    );
  }
}
module.exports = DumbComponent
