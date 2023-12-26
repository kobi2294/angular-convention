import { Question } from "../models/question.model";

export const QUESTIONS: Question[] =  [
    {
      caption: 'What do you get when you add Red to Green and Blue?',
      answers: ['Black', 'Gray', 'White', 'Brown'],
      correctIndex: 2,
    },
    {
      caption: 'What do you get when you add Red to Black?',
      answers: ['Dark Red', 'Red', 'Black', 'Gray'],
      correctIndex: 1,
    },
    {
      caption: 'What do you get when you add Blue to Red?',
      answers: ['Magenta', 'Cyan', 'Purple', 'White'],
      correctIndex: 0,
    },
    {
      caption: 'What do you get when you add Blue to Green?',
      answers: ['Magenta', 'Cyan', 'White', 'Teal'],
      correctIndex: 1,
    },
    {
      caption: 'What do you get when you add Red to Green?',
      answers: ['Brown', 'White', 'Orange', 'Yellow'],
      correctIndex: 3,
    },
    {
      caption: 'What do you get when you add Red to Cyan?',
      answers: ['Magenta', 'Blue', 'White', 'Purple'],
      correctIndex: 2,
    },
    {
      caption: 'What do you get when you add Yellow to Blue?',
      answers: ['Green', 'Cyan', 'White', 'Lime'],
      correctIndex: 2,
    },
    {
      caption: 'What do you get when you add Green to Magenta?',
      answers: ['Brown', 'Yellow', 'White', 'Orange'],
      correctIndex: 2,
    },
    {
      caption:
        'What do you get when you add 30% Green to 30% Blue and 30% Red?',
      answers: ['Black', '30% Gray', '90% Gray', 'White'],
      correctIndex: 1,
    },
    {
      caption: 'What do you need to do, to get from Yellow to Green?',
      answers: ['Add Green', 'Subtract Red', 'Add Blue', 'Nothing'],
      correctIndex: 1,
    },
  ]