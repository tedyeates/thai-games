import { HUNDRED, HUNDRED_THOUSAND, MILLION, TEN, TEN_THOUSAND, THOUSAND } from "../constants/digits"
import { ThaiNumberWords, ThaiNumbers } from "../constants/thaiNumbers"

type Digits = {
    millions: number,
    hundredThousands: number,
    tenThousands: number,
    thousands: number,
    hundreds: number,
    hasTwenty: boolean,
    tens: number,
    units: number
}


export const getDigitsOfNumber = (number:number): Digits => {
    const millions = Math.floor(number / MILLION)
    let numberLeft = number % MILLION

    const hundredThousands = Math.floor(numberLeft / HUNDRED_THOUSAND)
    numberLeft = numberLeft % MILLION

    const tenThousands = Math.floor(numberLeft / TEN_THOUSAND)
    numberLeft = numberLeft % TEN_THOUSAND

    const thousands = Math.floor(numberLeft / THOUSAND)
    numberLeft = numberLeft % THOUSAND

    const hundreds = Math.floor(numberLeft / HUNDRED)
    numberLeft = numberLeft % HUNDRED

    const hasTwenty = Math.floor(numberLeft / 20) === 1
    if (hasTwenty) {
        numberLeft = numberLeft % 20
    }

    const tens = Math.floor(numberLeft / TEN)
    numberLeft = numberLeft % TEN

    return {
        millions,
        hundredThousands,
        tenThousands,
        thousands,
        hundreds,
        hasTwenty,
        tens,
        units: numberLeft
    }
}


const digitToThaiNumberWord = (units: number, digits:number) => {
    let thaiNumberWord = ""
    if (units > 1) {
        thaiNumberWord += ThaiNumberWords.get(units)
    }

    if (units > 0) {
        thaiNumberWord += ThaiNumberWords.get(digits)
    }

    return thaiNumberWord
}


export const convertToThaiNumberWord = (digits:Digits) => {
    let thaiNumberWord = ""

    thaiNumberWord += digitToThaiNumberWord(digits.millions, MILLION)
    thaiNumberWord += digitToThaiNumberWord(digits.hundredThousands, HUNDRED_THOUSAND)
    thaiNumberWord += digitToThaiNumberWord(digits.tenThousands, TEN_THOUSAND)
    thaiNumberWord += digitToThaiNumberWord(digits.thousands, THOUSAND)
    thaiNumberWord += digitToThaiNumberWord(digits.hundreds, HUNDRED)
    thaiNumberWord += digits.hasTwenty || ThaiNumberWords.get(20)
    thaiNumberWord += digitToThaiNumberWord(digits.tens, TEN)
    thaiNumberWord += ThaiNumberWords.get(digits.units)

    return thaiNumberWord
}


export const convertToThaiNumber = (englishNumber:number) => {
    let thaiNumber:string = ""
    for (const character of englishNumber.toString()) {
        thaiNumber += ThaiNumbers.get(character)
    }

    return thaiNumber
}