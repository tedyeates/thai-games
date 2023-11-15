import { useReducer, useState } from "react"

const MINUTE = 60
const HOUR = 60 * MINUTE

type Action = { type: 'decrement' } | { type: 'set', value: number }

type State = {
    time: number
}

const reducer = (state: State, action: Action) => {
    switch (action.type) {
        case 'decrement':
            if (state.time <= 0) {
                return {
                    time: 0
                }
            }
            return {
                time: state.time - 1
            }
        case 'set':
            return {
                time: action.value
            }
        default:
            throw new Error('Unknown Action')
    }
}

export function useTime(defaultTime: number) {
    const [timer, timerDispatch] = useReducer(reducer, {time: defaultTime})
    const [intervalId, setIntervalId] = useState<number>()

    const getTime = () => {
        return timer.time
    }

    const toggleTimer = () => {
        if (intervalId) {
            return stopTimer()
        }

        return startTimer()
    }


    const startTimer = () => {
        const interval = setInterval(() => {
            timerDispatch({type: 'decrement'})
            if (timer.time <= 0) {
                timerDispatch({type: 'set', value: defaultTime})
                clearInterval(interval)
                setIntervalId(undefined)
            }
        }, 1000)

        setIntervalId(interval)
    }


    const stopTimer = () => {
        if (!intervalId) return
        clearInterval(intervalId)
        setIntervalId(undefined)
    }


    const resetTimer = () => {
        timerDispatch({type: 'set', value: defaultTime})
    }


    const formatTimeAsString = (time:number) => {
        if (time < 10) {
            return `0${time}`
        }

        return time.toString()
    }


    const getDigits = () => {
        const hours = Math.floor(timer.time/HOUR)
        const timeLeft = timer.time % HOUR

        const minutes = Math.floor(timeLeft/MINUTE)
        const seconds = timeLeft % MINUTE

        return {hours, minutes, seconds}
    }


    const getDisplayTime = () => {
        const digits = getDigits()
        const hours = formatTimeAsString(digits.hours)
        const minutes = formatTimeAsString(digits.minutes)
        const seconds = formatTimeAsString(digits.seconds)

        return `${hours}:${minutes}:${seconds}`
    }

    return {
        getTime,
        toggleTimer,
        startTimer,
        stopTimer,
        resetTimer,
        getDisplayTime
    }

}
