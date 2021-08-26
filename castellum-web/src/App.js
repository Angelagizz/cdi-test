import './App.css';
import React, {useState, useEffect} from 'react';
import {useDispatch} from "react-redux";
import {sortAdd} from "./redux/action/alphabetAction";
import {handleSort} from "./services/alphabetService";

function App() {
  const [words, setWords] = useState("");
  const [result, setResult] = useState("")
  const dispatch = useDispatch();


    // const store = window.localStorage;
    // useEffect(() => {
    
    // store.getItem("result")
    // }, [])


  const handleClick = (e) => {
    e.preventDefault();
    const store = window.localStorage;
    handleSort(words)
      .then(response => {
        console.log(response);
        setResult(response.result)
      })
      .catch(error => {
        console.log(error);
      });

  }
  
  return (
    <div className="App">
      <div className="title">
        <h1>Alphabet Sort</h1>
      </div>
      <div className="kolom">
        <form>
          <input
            type="word"
            onChange={(e) => setWords(e.target.value.toLowerCase())}
            value={words}
            placeholder="input words here..."
          ></input>
        </form>
        <button onClick={(e) => handleClick(e)}>Sort</button>
      </div>
      <div className="answer">
        <p>Result Here</p>
        <div className="result">
          {result}
        </div>
      </div>
    </div>
  );
}

export default App;
