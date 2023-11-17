import { ThaiNumberWords } from "../constants/thaiNumbers"
import { ThaiMinuteWords } from "../constants/thaiTime"
import { convertToThaiNumberWord } from "./translateNumbers"

export const translateMinutesToThaiWords = (minutes: number) => {
    let thaiMinuteWord = ThaiMinuteWords.get(minutes)

    if (!thaiMinuteWord) {
        thaiMinuteWord = convertToThaiNumberWord(minutes, ThaiNumberWords)
        thaiMinuteWord += ThaiMinuteWords.get("default") ?? ""
    }
    
    return {thaiMinuteWord}
}