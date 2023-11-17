import { useState } from "react";
import { ThaiClockWords } from "../constants/thaiTime";

export function useClock() {
    const [intervalId, setIntervalId] = useState<number>()
    const [date, setDate] = useState(new Date())
    
    const startClock = () => {
        const interval = setInterval(() => {
            setDate(new Date())
        }, 1000)

        setIntervalId(interval)
    }


    const stopClock = () => {
        clearInterval(intervalId)
    }


    const getTimeThaiWords = () => {
        const hours = ThaiClockWords[date.getHours()]
        const minutes = date.getMinutes()
        const seconds = date.getSeconds()

        return `${hours}:${minutes}:${seconds}`
    }


    return {
        startClock,
        stopClock,
        getTimeThaiWords
    }
}