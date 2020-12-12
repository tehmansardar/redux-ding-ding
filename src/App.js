import {useState} from 'react'
import {connect} from 'react-redux'
import './App.css';

function App(props) {
  console.log(props.myname);
  return (
    <div className="App">
      <h1>My name is {props.myname}</h1>
    </div>
  );
}
const mapStateToProps = state=>{
  return{
    myname:state.name
  }
}

export default connect(mapStateToProps)(App);
