import success from '../../images/success.png'
import './End.scss'

export default function End(props){

    const arrayAnswerQuestion = props.data.filter(obj => obj.answerGiven === true);
    return(
        <div className="result">
            <img src={success} alt='success'/>
            <div className="result__information">
                <h2>Тест пройдений</h2>
                <p> Ви відповіли на {arrayAnswerQuestion.length} з {props.data.length} запитань</p>
                <p>Оцінка: {props.totalPoints} з {props.allPointsQuestion}</p>
            </div>
            <div className='restart__button'>
                <button onClick={() => window.location.reload()} >Розпочати знову</button>
            </div>
        </div>
    )
}