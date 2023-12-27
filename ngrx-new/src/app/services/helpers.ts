import {keyword, rgb } from "color-convert";
import { KEYWORD, RGB } from "color-convert/conversions";
import namer from 'color-namer';
import { Question } from "../models/question.model";

export function randomNumber(min: number, max: number, includeMax = false): number {
    const range = includeMax ? max - min + 1 : max - min;
    return Math.floor(Math.random() * range) + min;
}

export function randomItem<T>(items: T[]): T {
    const index = randomNumber(0, items.length);
    return items[index];
}

export function randomItems<T>(items: T[], count: number): T[] {
    const res: T[] = [];

    while (res.length < count) {
        const newItem = randomItem(items);
        items = items.filter(i => i !== newItem);
        res.push(newItem);
    }

    return res;
}

const KNOWN_COLORS: KEYWORD[] = [
    'red', 
    'blue', 
    'green', 
    'yellow', 
    'orange', 
    'purple', 
    'magenta', 
    'cyan', 
    'gray', 
    'brown', 
    'teal', 
    'gold', 
    'lime', 
    'tomato'
];

export function addRgb(...rgbs: RGB[]): RGB {
    const res: RGB = [0, 0, 0];

    for (let index = 0; index < 3; index++) {
        const sum = rgbs.reduce((acc, c) => acc + c[index], 0)
        res[index] = Math.min(sum, 255);
    }

    return res;
}


export function randomColorQuestion() {
    const twoOrThree = randomNumber(2, 3, true);
    const colors = randomItems([...KNOWN_COLORS], twoOrThree) as [KEYWORD, KEYWORD] | [KEYWORD, KEYWORD, KEYWORD];
    const rgbs = colors.map(clr => keyword.rgb(clr));
    const added = addRgb(...rgbs);
    const addedHex = rgb.hex(added);

    const htmlCols = namer(addedHex).html;
    const names = htmlCols.map(n => n.name);
    const name = names[0];

    const answers = [names[25], names[50], names[75], names[100]];
    const correctIndex = randomNumber(0, 4);
    answers[correctIndex] = name;

    const question: Question = {
        caption: colors, 
        answers, 
        correctIndex
    };
    console.log(question);
    return question;

}