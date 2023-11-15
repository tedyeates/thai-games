import { useTime } from "../utilities/time"

export function Timer() {
    const timer = useTime(120)

    return (
        <div>
            <div>Progress Circle</div>
            <div>{}</div>
            <div>{timer.getDisplayTime()}</div>
            <div>{timer.getTime()}</div>
            <button onClick={() => timer.toggleTimer()}>Start/Stop</button>
            <button onClick={() => timer.resetTimer()}>Reset</button>
        </div>
    )
}