import SpriteScreen from "./components/SpriteScreen";
import WordGuess from "./components/WordGuess";
import Stats from "./components/Stats";
import apiCall from "./services/apiCall";
import { useEffect, useState } from "react";
import Confetti from "react-confetti";

function App() {

  const [word,setWord] = useState([]);
  const [correct,setCorrect] = useState(true);
  const [startGuess,setStartGuess] = useState(false);
  const [myGuess,setMyGuess] = useState({});
  const [step,setStep] = useState(0);
  const [lives,setLives] = useState(6);
  const [myWords,setMyWords] = useState([]);
  const [won,setWon] = useState(false);


  console.log(word);
  const handleCorrect =()=>{
    setCorrect(true);
    setStep(prev=>prev)
  }

  const handleinCorrect =()=>{
    setCorrect(false);
    setStep(prev=>prev+1)
    setLives(prev=>prev-1);
   
  }


 

  const handleChange = (e,index,id)=>{
    setStartGuess(true);
    e.target.value = e.target.value[e.target.value.length-1];
    myWords[index] = e.target.value;
    setMyGuess({value:e.target.value,index:index,id:id})
}

const restart = ()=>{
  setLives(6);
  setWord([]);
  setMyWords([]);
  setStep(0);
  apiCall().then(value => setWord(value));
  setWon(false)
}

useEffect(()=>{
  if(lives === 0)
  {
    alert("GameOver");
    restart();
  }

  console.log('its running')
  if(myWords.length > 1)
  {
    if(isEqual(myWords,word)) setWon(true)
  }
  
},[myWords,word,lives,myGuess])

  useEffect(()=>{
    if(startGuess){
        if(word[myGuess.index] === myGuess.value)
        {
            console.log("correct");
            setMyGuess(prev => ({...prev,correct:true}))
            handleCorrect();
        }
        else{
          console.log('incorrect')
           handleinCorrect();
        }
        setStartGuess(false);
    }

   
},[word,startGuess,myGuess])

  useEffect(()=>{
    word.forEach(item=>{
      setMyWords(prev=>([...prev,'']))
    })
  },[word])

  useEffect(()=>{
    apiCall().then(value => setWord(value));
  },[])
  
  function doNothing()
  {

  }

  function isEqual(a,b)
  {
    // If length is not equal
    if(a.length !== b.length)
     return false;
    else
    {
     
    // Comparing each element of array
     for(var i=0;i < a.length; i++)
     if(a[i] !== b[i])
      return false;
      return true;
    }
  }
  return (
    
    <div className="flex flex-col h-screen">
      {won && <Confetti/>}
      <Stats lives = {lives}/>
      <SpriteScreen correct = {correct} step = {step}/>
      <WordGuess 
      myWords = {myWords} 
      handleCorrect = {handleCorrect} 
      startGuess = {startGuess}
      handleChange = {handleChange}
      myGuess = {myGuess}
      doNothing = {doNothing}
      won = {won}
      restart = {restart}/>
     
    </div>
  );
}

export default App;
