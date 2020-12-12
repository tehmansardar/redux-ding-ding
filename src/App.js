import {connect} from 'react-redux'
import './App.css';

function App(props) {
  return (
    <div className="App">
      <h1>My name is {props.myname}</h1>
      <button
      onClick={()=>props.changeName('Temi')}
      >Change</button>
    </div>
  );
}
const mapStateToProps = state=>{
  return{
    myname:state.name
  }
}
const mapDispatchToProps = dispatch=>{
  return{
    changeName:name=>{dispatch({
      type : 'CHANGE_NAME',
      payload : name
    })}
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
