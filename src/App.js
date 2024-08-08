import { useEffect, useRef, useState } from "react";
import End from "./components/endComponents/End";
import Main from "./components/mainComponents/Main";
import QuestionList from "./components/timeComponents/QuestionList";
import Time from "./components/timeComponents/Time";
import questionData from './data.js'

function App() {
  const [data, setData] = useState(questionData);
  const [isSesion, setIsSesion] = useState(true);
  const [indexQuestion, setIndexQuestion] = useState(0);
  const [totalPoints, setTotalPoints] = useState(0);
  const [allPointsQuestion, setAllPointsQuestion] = useState(0)
  const [answerGivenArray, setAnswerGiwenArray] = useState([])
  const [styleWidthProgres, setStyleWidthProgres] = useState({width: 0})
  const [allQuestion, setAllQuestion] = useState(true)
  const [timer, setTimer] = useState()
  const timeId = useRef()


  useEffect(()=> {
    setTimer(data.length * 60)
  }, [])


  useEffect(() => {
    setStyleWidthProgres({
      width:  (answerGivenArray.length > 0) ? Math.floor((answerGivenArray.filter(obj => (obj)).length / answerGivenArray.length) * 100): 0
    })
  }, [answerGivenArray])


  useEffect(() => {
    const arrayAnsverGiven = [];
    for(let i = 0; i < data.length; i++){
      const currentQuestion = data[i];
      arrayAnsverGiven.push(currentQuestion.answerGiven);
    }
    setAnswerGiwenArray(arrayAnsverGiven)
  }, [])


  useEffect(() => {
    setAllPointsQuestion(() => {
      let newAllPoint = 0;
      for(let i = 0; i < data.length; i++){
        newAllPoint += data[i].questionPoint;
      }
      return newAllPoint;
    })
  }, [])


  function NextQuestion(){
    if(indexQuestion < data.length -1){
        setIndexQuestion(prevValue => prevValue + 1)
    }
}


function BackToTheQuestion(){
    if(indexQuestion > 0){
        setIndexQuestion(prevValue => prevValue - 1)
    }   
}


function totalScore( index, answer, point){
  if(data[index].currentAnswerIndex === answer && point > 0){
    setTotalPoints(prev => prev + point);
  }
  if(indexQuestion < data.length -1){
    setIndexQuestion(prevValue => prevValue + 1)
  }


  setData(prevData => {
    const newData = prevData.map((obj, index) =>{
      if(index === indexQuestion){
        return {
          ...obj,
          answerGiven: true
        }
      }
      return {...obj}
    })
    return newData
  })


  setAnswerGiwenArray(prevArrey => {
    const newValue = prevArrey.map((value, index) =>{
      let newGiven = value
      if(index === indexQuestion){
        newGiven = !value;
      }
      return newGiven
    });
    return newValue
  }
  )
}

function selectedQuestion(index){
  setIndexQuestion(index)
}
function countTimeToEnd(){
  if(isSesion === false){
    clearInterval(timeId.current)

  }else if(timer === 1 || isSesion === false){
    setTimer(prevValue => prevValue - 1)
    console.log(timer)
    clearInterval(timeId.current)
    setIsSesion(false)

  }else if(timer){
    setTimer(prevValue => prevValue - 1)
    
  }
}


useEffect(() =>{
  timeId.current = setInterval(countTimeToEnd, 1000)
  return () => clearInterval(timeId.current);
})

  return (
    <>
    {isSesion ? 
    <div className="App">
      <div className="content">
        
        <Main 
          data = {data} indexQuestion = {indexQuestion} s
          totalScore = {totalScore}
          NextQuestion = {NextQuestion}
          BackToTheQuestion = {BackToTheQuestion}
        ></Main>
      </div>
      <div className="navigation">
        <Time
          timer = {timer}
        ></Time>
        <QuestionList
          
          allQuestion = {allQuestion}
          setAllQuestion = {setAllQuestion}
          styleWidthProgres = {styleWidthProgres}
          data = {data}
          indexQuestion = {indexQuestion}
          selectedQuestion = {selectedQuestion}
          setIsSesion = {setIsSesion}></QuestionList>
      </div>
    </div> : 
    <End
      totalPoints = {totalPoints}
      data = {data}
      allPointsQuestion = {allPointsQuestion}
    />
    }
    </>
  );
}

export default App;

