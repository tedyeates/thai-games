import {MILLION, HUNDRED_THOUSAND, TEN_THOUSAND, THOUSAND, HUNDRED, TEN} from './digits'

export const ThaiNumbers = new Map([
    ["0", "๐"],
    ["1", "๑"],
    ["2", "๒"],
    ["3", "๓"],
    ["4", "๔"],
    ["5", "๕"],
    ["6", "๖"],
    ["7", "๗"],
    ["8", "๘"],
    ["9", "๙"]
])


export const ThaiNumbersPronunciation = new Map([
    [0, "sun"],
    [1, "nueng"],
    [2, "song"],
    [3, "sam"],
    [4, "si"],
    [5, "haa"],
    [6, "hok"],
    [7, "chet"],
    [8, "paet"],
    [9, "kao"],
    [TEN, "sip"],
    [11, "sip et"],
    [20, "yi sip"],
    [HUNDRED, "roi"],
    [THOUSAND, "phan"],
    [TEN_THOUSAND, "muen"],
    [HUNDRED_THOUSAND, "saen"],
    [MILLION, "lan"]
])


export const ThaiNumberWords = new Map([
    [0, "ศูนย์"],
    [1, "หนึ่ง"],
    [2, "สอง"],
    [3, "สาม"],
    [4, "สี่"],
    [5, "ห้า"],
    [6, "หก"],
    [7, "เจ็ด"],
    [8, "แปด"],
    [9, "เก้า"],
    [TEN, "สิบ"],
    [11, "สิบเอ็ด"],
    [20, "ยี่สิบ"],
    [HUNDRED, "ร้อย"],
    [THOUSAND, "พัน"],
    [TEN_THOUSAND, "หมื่น"],
    [HUNDRED_THOUSAND, "แสน"],
    [MILLION, "ล้าน"]
])