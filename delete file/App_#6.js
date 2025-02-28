// import logo from './logo.svg';
// import './App.css';
import Button from "../src/Button";
import styles from "./App.module.css";
import {useState, useEffect} from "react";
function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword]=useState("");
  const onClick = () => setValue ((prev)=> prev+1);
  const onChange=(event)=>setKeyword(event.target.value);

  useEffect(()=>{
    console.log("I run only once.");
  },[]);
  
  useEffect(()=>{
    if(keyword!=="" && keyword.length > 5){
    console.log("I run when 'keyword' changes.");
  }
  },[keyword]);

  useEffect(()=>{
    if(counter !== 0){
    console.log("I run when 'counter' changes..");
  }
  },[counter]);


  useEffect(()=>{
    console.log("I run when keyword & counter change");
  },[keyword,counter]);

  
  return (    
    <div>
      <h1 className={styles.title}>Welcome back !</h1>
      <input 
        value={keyword} 
        onChange={onChange} 
        type="text" 
        placeholder="Search" 
      />
      <Button  text={"Continue"}/>
      <h1>{counter}</h1>
      <button onClick={onClick}> click me </button>      
    </div>
      
  );
}

export default App; 
