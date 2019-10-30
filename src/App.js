import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';

class App extends Component {

  render() {
    return (
      <div className="App">
        <div>Hi! I am {this.props.age}. Use buttons to increase and decrease my age :) </div>
        <button className='up' onClick={this.props.onUp}>UP</button>
        <button className='down' onClick={this.props.onDown}>DOWN</button>
        <div>
          <ul>
            {this.props.history.map(el => 
              <li className='historyItem' key={el.id} onClick={() => {this.props.onDelClick(el.id)}}>
                {el.age}
                <div className='hint'>Click item to remove it</div>
              </li>)}
          </ul>
        </div>
      </div>
    )  
  }

}

  const mapStateToProps = state => {
    return {
      age: state.age,
      history: state.history
    }
  }

  const mapDispatchToProps = dispatch => {
    return {
      onUp: () => dispatch({type: 'UP', value: 1}),
      onDown: () => dispatch({type: 'DOWN', value: 1}),
      onDelClick: (id) => dispatch({type: 'ITEM_DEL', id: id})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
