import './Circle.scss'
export default function Circle(props){
    const styles ={
        backgroundColor: (props.index === props.indexQuestion ? '#fff': ''),
        color: (props.index === props.indexQuestion ? 'aqua': ''),
    }
    const answerGivenQuestion = {
        backgroundColor: (props.index === props.indexQuestion ? 'aqua': ''),
        color: (props.index === props.indexQuestion ? '#fff': ''),
    }
    return(
        <button onClick={() => props.selectedQuestion(props.index)} 
            className={props.data[props.index].answerGiven ? 'circle__active': 'circle'}
            style={props.data[props.index].answerGiven? answerGivenQuestion : styles}
        >
            {props.number}
        </button>
    )
}