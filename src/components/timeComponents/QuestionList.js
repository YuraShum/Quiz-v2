import Circle from './Circle';
import './QuestionList.scss'


export default function QuestionList({data, indexQuestion, selectedQuestion, answerGivenArray, styleWidthProgres,
                                    allQuestion,  setAllQuestion, setIsSesion}){

    const questionElem = (allQuestion) ? data.map((number) => {
        return(
            <Circle 
                data = {data}
                answerGivenArray = {answerGivenArray}
                number = {number.id} 
                index = {number.id - 1}
                key = {number.id} 
                selectedQuestion ={selectedQuestion}
                indexQuestion = {indexQuestion}
            ></Circle>
        )
    }): data.filter(obj => obj.answerGiven !== true).map((number) => {
        return(
            <Circle 
                data = {data}
                answerGivenArray = {answerGivenArray}
                number = {number.id} 
                index = {number.id - 1}
                key = {number.id} 
                selectedQuestion ={selectedQuestion}
                indexQuestion = {indexQuestion}
            ></Circle>
        )
    })
    

    const styles = {
        width: `${styleWidthProgres.width}%`
    }
    const classNameActive = `${
        allQuestion ? 
        'question__fullness__button question__fullness__button__active' : 
        'question__fullness__button'}`
    
    const classNameUnpassed = `${
        allQuestion ? 
        'question__fullness__button ' : 
        'question__fullness__button question__fullness__button__active'}`

    
    return(
    <div className="question__list">
        <div className="question__list__progress">
            <p>Прогрес</p>
            <div className="question__list__progress__scale">
                <div className='question__list__progress__scale__inner' style={styles}></div>
            </div>
        </div>
        <div className="question__list__number">
            <p>Питання</p>
            <div className="question__list__scopes">
                {questionElem}
            </div>
        </div>
        <div className='question__fullness'>
            <button className={classNameActive}
                onClick={() => setAllQuestion(true)}

                >Всі питання</button>
            <button className={classNameUnpassed} onClick={() => setAllQuestion(false)}>Непройдені</button>
        </div>
        <div className='completion'>
            <button className='completion__button' onClick={() => setIsSesion(false)}>Завершити</button>
        </div>
    </div>
    )

}