import { Question } from "../models/question.model";

export const QUESTIONS: Question[] =  [
    {
      caption: ['red', 'green', 'blue'],
      answers: ['Black', 'Gray', 'White', 'Brown'],
      correctIndex: 2,
    },
    {
      caption: ['red', 'black'],
      answers: ['Dark Red', 'Red', 'Black', 'Gray'],
      correctIndex: 1,
    },
    {
      caption: ['blue', 'red'],
      answers: ['Magenta', 'Cyan', 'Purple', 'White'],
      correctIndex: 0,
    },
    {
      caption: ['blue', 'green'],
      answers: ['Magenta', 'Cyan', 'White', 'Teal'],
      correctIndex: 1,
    },
    {
      caption: ['green', 'red'],
      answers: ['Brown', 'White', 'Orange', 'Yellow'],
      correctIndex: 3,
    },
    {
      caption: ['cyan', 'red'],
      answers: ['Magenta', 'Blue', 'White', 'Purple'],
      correctIndex: 2,
    },
    {
      caption: ['blue', 'yellow'],
      answers: ['Green', 'Cyan', 'White', 'Lime'],
      correctIndex: 2,
    },
    {
      caption: ['green', 'magenta'],
      answers: ['Brown', 'Yellow', 'White', 'Orange'],
      correctIndex: 2,
    }
  ]