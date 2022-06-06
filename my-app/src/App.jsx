// import logo from './logo.svg';
import './App.css';
import React from "react"
import { toBeEmpty } from '@testing-library/jest-dom/dist/matchers';
// import profile from "./components/profile.jsx"

function App() {

  const [age,updatedAge]=React.useState(22)

  function increase(){
    updatedAge(age+1)
  }
  function decrease(){
    updatedAge(age-1)
  }

  function moreDetails(){

    if(document.getElementById("more_details").innerHTML!=""){
    

    document.getElementById("more_button").innerText="Show More Details"
    document.getElementById("more_details").innerHTML=""
  }
  else
  {
    document.getElementById("more_button").innerText="Hide More Details"
    let p1=document.createElement("p")
    p1.innerText="Location : Hyderabad"

    let p2=document.createElement("p")
    p2.innerText="Status : Studing"

    document.getElementById("more_details").append(p1,p2)
    
  }
  }

  function add_note(){
  let input_value=document.getElementById("add_note").value
  let box=document.createElement("div")
  box.setAttribute("id","display_list")
  box.style.color="green"
  let checkbox=document.createElement("input")
 checkbox.setAttribute("type","checkbox")

 box.append(checkbox,input_value)
document.getElementById("list").append(box)

  checkbox.addEventListener("click",function(){
   if(box.style.color==="green"){ 
   box.style.color="red"
   box.style.textDecoration="line-through"
   }
   else{
     box.style.color="green"
     box.style.textDecoration="none"
   }
    
  })

  
  }
  return (

  <div id="main">

    {/* the left part */}

  <div id="left" style={{boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px", marginTop:"50px"}}>
    <h1>Profile</h1>
    <img style={{width:"120px",height:"120px", marginLeft:"32%"}} src="https://www.businessinsider.in/photo/79599630/elon-musk-makes-clear-his-stance-on-self-driving-cars-ai-oversight-and-his-ad-for-mars.jpg?imgsize=2436013" alt=""></img>
    <div>Name : Avinash Kumar</div>
    <div>Age:{age}</div>
    <button onClick={increase}>Increase Age</button>
    <button onClick={decrease}>Decrease Age</button>

    <button id="more_button" onClick={moreDetails}>Show More Details</button>
    <ul id="more_details">

    </ul>
 
  </div>

{/* The right part */}
<div id='right'>
  <h1>To Do List</h1>
  <input type={"text"} placeholder="Add a Note" style={{width:"60%"}} id="add_note" ></input>
  <button onClick={add_note}>Add</button>
  <div id='list'></div>
</div>

  </div>
  );
}

export default App;
