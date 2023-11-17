import { ThaiNumberWords, ThaiNumbersPronunciation } from "../constants/thaiNumbers"
import { useTime } from "../utilities/time"


export function Timer() {
    const timer = useTime(120)

    return (
        <section>
            <div>Progress Circle</div>
            <div>{timer.getDisplayTimeThai(ThaiNumberWords)}</div>
            <div>{timer.getDisplayTimeThai(ThaiNumbersPronunciation, true)}</div>
            <button onClick={() => timer.toggleTimer()}>Start/Stop</button>
            <button onClick={() => timer.resetTimer()}>Reset</button>
        </section>
    )
}