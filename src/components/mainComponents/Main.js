
import Header from './Header';
import './Main.scss'
export default function Main({data, indexQuestion,NextQuestion,  BackToTheQuestion, totalScore, answerGivenArray}){

    const elemdata = data.map((obj, order) => {
        return(
            <>
                <p>{obj.question}</p>
            <ul className='question__list'>
                {obj.answer.map((answer, index) => {

                    return(
                        obj.answerGiven ?                         
                            <button disabled className='question__list__button'
                                key = {index} 
                                onClick ={() => {totalScore(order,index, obj.questionPoint)}}
                            >{answer}
                            </button> :
                            <button  className='question__list__button'
                                key = {index} 
                                onClick ={() => {totalScore(order,index, obj.questionPoint)}}
                            >{answer}
                            </button>
                    )
                })}
            </ul>
        </>
        )
    })
    return(
        <div className="question__container">
            <Header lengthArray = {data.length} number = {indexQuestion + 1} point = {data[indexQuestion].questionPoint}></Header>
            {elemdata[indexQuestion]}
            <div className="question__nav">
                <button className="question__nav__button" onClick={() => BackToTheQuestion()}>Попереднє</button>
                <button className="question__nav__button" onClick={() => NextQuestion()}>Наступне</button>
            </div>
        </div>
    )
}