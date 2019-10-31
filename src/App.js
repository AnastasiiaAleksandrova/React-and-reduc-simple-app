import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import * as actionCreator from './store/actions/actions';

class App extends Component {

  render() {
    //console.log(2);
    const loader = this.props.loading ? 'Please wait a bit I am growing...' : '';
    return (
      <div className="App">
        <div>Hi! I am {this.props.age}. Use buttons to increase and decrease my age :) </div>
        <button className='up' onClick={this.props.onUp}>UP</button>
        <button className='down' onClick={this.props.onDown}>DOWN</button>
        <div className='hint loader'>{loader}</div>
        <div>
          <ul>
            {this.props.history.map(el =>
              <li className='historyItem' key={el.id} onClick={() => {this.props.onDelClick(el.id)}}>
                {el.age}
                <div className='hint'>Click item to remove it</div>
              </li>
              )}
          </ul>
        </div>
      </div>
    )  
  }

}

  const mapStateToProps = state => {
    //console.log(1);
    return {
      age: state.age,
      history: state.history,
      loading: state.loading
    }
  }

  const mapDispatchToProps = dispatch => {
    return {
      onUp: () => dispatch(actionCreator.ageUp(1)),
      onDown: () => dispatch(actionCreator.ageDown(1)),
      onDelClick: (id) => dispatch({type: 'ITEM_DEL', id: id})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
