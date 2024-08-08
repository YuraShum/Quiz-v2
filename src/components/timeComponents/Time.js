import './Time.scss'
export default function Time({timer}){
    const second = 1;
    const minute = 60 * second;
    const hour = 60 * minute;
    const hoursRes = Math.floor((timer)/ hour);
    const minuteRes =  Math.floor(((timer) % hour) / minute);
    const secondRes = Math.floor((timer) % minute);

    return(
        <div className="time__section">
            <p>Час</p>
            <div className="time__section--timer">
                <p>{hoursRes < 10 ? `0${hoursRes}`: hoursRes}:
                    {minuteRes < 10 ? `0${minuteRes}`: minuteRes}:
                    {secondRes < 10 ? `0${secondRes}`: secondRes}</p>
            </div>
        </div>
    )
}