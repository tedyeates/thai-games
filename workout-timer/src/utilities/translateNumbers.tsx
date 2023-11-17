import { ThaiNumbers } from "../constants/thaiNumbers"

export type Digits = {
    hasTwenty: boolean,
    tens: number,
    units: number,
    isZero: boolean
}

const digitToThaiNumber = (
    units: number, 
    digits:number, 
    data:Map<number,string>,
    isHyphenated:boolean = false
) => {
    let thaiNumberWord = ""
    if (units > 1) {
        thaiNumberWord += data.get(units)
        thaiNumberWord += isHyphenated ? "-" : ""
    }

    if (units > 0) {
        thaiNumberWord += data.get(digits)
        thaiNumberWord += isHyphenated ? "-" : ""
    }

    return thaiNumberWord
}


export const convertToThaiNumberWord = (
    number:number, 
    data:Map<number,string>,
    isHyphenated:boolean = false
) => {
    let thaiNumberWord = ""

    if (number === 0) {
        return data.get(0)
    }

    let numberLeft = number
    const hasTwenty = Math.floor(numberLeft / 10) === 2
    if (hasTwenty) {
        numberLeft = numberLeft % 20
    }

    thaiNumberWord += hasTwenty ? data.get(20) : ""
    thaiNumberWord += hasTwenty && isHyphenated ? "-" : ""

    const tens = Math.floor(numberLeft / 10)
    numberLeft = numberLeft % 10

    thaiNumberWord += digitToThaiNumber(tens, 10, data, isHyphenated && !!numberLeft)
    thaiNumberWord += numberLeft ? data.get(numberLeft) : ""

    return thaiNumberWord
}



export const convertToThaiNumber = (englishNumber:number) => {
    let thaiNumber:string = ""
    for (const character of englishNumber.toString()) {
        thaiNumber += ThaiNumbers.get(character)
    }

    return thaiNumber
}