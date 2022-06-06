// import logo from './logo.svg';
// import './App.css';
import React from "react"
// import profile from "./components/profile.jsx"

function App() {

  const [age,updatedAge]=React.useState(22)

  function increase(){
    updatedAge(age+1)
  }
  function decrease(){
    updatedAge(age-1)
  }
  return (
  <div  style={{width:"40%", padding:"30px 0px 0px 60px", boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px", marginTop:"50px"}}>
    <h1>Profile</h1>
    <img style={{width:"100px",height:"100px"}} src="https://www.businessinsider.in/photo/79599630/elon-musk-makes-clear-his-stance-on-self-driving-cars-ai-oversight-and-his-ad-for-mars.jpg?imgsize=2436013"></img>
    <div>Name : Avinash Kumar</div>
    <div>Age:{age}</div>
    <button onClick={increase}>Increase Age</button>
    <button onClick={decrease}>Decrease Age</button>
    <br></br>
    <button>More Details</button>
    {/* console.log("hi") */}
  </div>
  );
}

export default App;
