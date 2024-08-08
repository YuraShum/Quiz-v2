import star from "./../../images/star.png"
import question from "./../../images/question.png"
import logo from "./../../images/logo.jpg"
import "./Header.scss"

export default function Header({number, point, lengthArray}){
    return(
        <header className="header">
            <div className="question">
                <img src={logo} alt ='logo'/>
                <p className="guestion__number">
                    Питання {number} з {lengthArray}
                </p>
            </div>
            <div className="question__score">
                <img src={star} alt='star'/>
                <p>{point} бал</p>
                <img src={question} alt='question'/>
            </div>
        </header>
    )
}