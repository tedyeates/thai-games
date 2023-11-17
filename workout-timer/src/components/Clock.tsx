import { useEffect } from "react"
import { useClock } from "../utilities/clock"

export function Clock() {
    const {startClock, stopClock, getTimeThaiWords} = useClock()


    useEffect(() => {
        startClock()

        return () => stopClock()
    }, [])

    return (
        <section>
            <div>{getTimeThaiWords()}</div>
        </section>
    )
}