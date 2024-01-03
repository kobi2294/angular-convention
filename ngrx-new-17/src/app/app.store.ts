import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { signalStore, withComputed, withMethods, withState } from "@ngrx/signals";
import { QuizState } from "./models/quiz-state.model";
import { QUESTIONS } from "./data/questions";
import { computed, inject } from "@angular/core";
import { Answer } from "./models/answer.model";
import { exhaustMap, pipe, tap } from 'rxjs';
import { ColorQuizGeneratorService } from './services/color-quiz-generator.service';
import { withDevtools } from './custom-features/with-devtools.feature';

export const QuizStore = signalStore(
    withState<QuizState>({questions: QUESTIONS, answers: [], isBusy: false}), 
    withDevtools('Quiz Store'),
    withComputed(({questions, answers}) => ({
        currentQuestionIndex: computed(() => answers().length), 
        totalQuestions: computed(() => questions().length),
        isDone: computed(() => answers().length === questions().length), 
        correctCount: computed(()=> answers().filter(a => a.isCorrect).length), 
    })), 
    withComputed(({questions, currentQuestionIndex}) => ({
        currentQuestion: computed(() => questions()[currentQuestionIndex()])
    })), 
    withMethods(({update, ...store}, service = inject(ColorQuizGeneratorService)) => ({
        restart() {
            update({type: 'Restart'}, {answers: []});   
        },
        log() {
            update({type: 'log'}, state => {
                console.log('signalr store state', state);
                return {};
            })
        },
        answerCurrentQuestion(answerIndex: number) {
            const question = store.currentQuestion();
            const answer: Answer = {
                userAnswer: answerIndex, 
                isCorrect: question.correctIndex === answerIndex
            }
            update({type: 'Answer Current Question', answerIndex}, state => ({answers: [...state.answers, answer]}))
        }, 
        regenerate: rxMethod<void>(pipe(
            tap(_ => update({type: 'Start Regenerate'}, ({isBusy: true}))),
            exhaustMap(_ => service.createRandomQuiz().pipe(
                tap(questions => update({type: 'Regenrate Completed', questions}, ({
                    questions, answers: [], 
                    isBusy: false
                })))
            ))
        ))
    }))
);