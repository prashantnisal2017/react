import React, { Component } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

class App extends Component{
  state = {
    text: ""
  };

  handleAdd=  async e =>{
    await this.setState({
      text: e.target.value
    });
  }

  handleSubmit= e =>{
    e.preventDefault();
    console.log(this.state.text);
    let formData = new FormData();
    formData.append("text",this.state.text);
    // const url= "http://localhost/vote/react-bknd/"
    const url= "https://rotaractmun.org/vote-bknd/"
    axios.post(url,formData).then(res=> console.log(res.data)).catch(err=> console.log(err));
  }

  render(){
    return (
      <div className="App-header">
        <input 
        className="form-control"
        type="text" 
        id="text"
        placeholder="Enter text here"
        onChange= {this.handleAdd}
      />
        <button 
        className="btn btn-success"
        id="submit"
        onClick= {this.handleSubmit}>
          submit
        </button>

      </div>
    );
  }
}
export default App;
