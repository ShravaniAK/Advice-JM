// import logo from './logo.svg';
import './App.css';
import axios from 'axios';

import React, { Component }  from 'react';


 class App extends Component {
  state={
    advice:''
  };
  componentDidMount(){
    this.fetchadvice();
  }
  fetchadvice=()=>{
    axios.get('https://api.adviceslip.com/advice')
    .then((response)=>{
      const {advice}=response.data.slip;
     this.setState({advice});
    })
    .catch((error)=>{
      console.log(error );
    })

  }
  render() {
    // const advice=this.state;
    return (
      <div className='App'>
        <div className="card">
        <h1 className='heading'>{this.state.advice}</h1>
  <button className="btn" onClick={this.fetchadvice}>
    give me advice
  </button>
        </div>
      </div>
    )
  }
}


export default App;
