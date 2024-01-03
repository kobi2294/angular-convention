import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { patchState, signalStore, withComputed, withMethods, withState } from "@ngrx/signals";
import { QuizState } from "./models/quiz-state.model";
import { QUESTIONS } from "./data/questions";
import { computed, inject } from "@angular/core";
import { Answer } from "./models/answer.model";
import { exhaustMap, pipe, tap } from 'rxjs';
import { ColorQuizGeneratorService } from './services/color-quiz-generator.service';

export const QuizStore = signalStore(
    withState<QuizState>({questions: QUESTIONS, answers: [], isBusy: false}), 
    withComputed(({questions, answers}) => ({
        currentQuestionIndex: computed(() => answers().length), 
        totalQuestions: computed(() => questions().length),
        isDone: computed(() => answers().length === questions().length), 
        correctCount: computed(()=> answers().filter(a => a.isCorrect).length), 
    })), 
    withComputed(({questions, currentQuestionIndex}) => ({
        currentQuestion: computed(() => questions()[currentQuestionIndex()])
    })), 
    withMethods((store, service = inject(ColorQuizGeneratorService)) => ({
        restart() {
            patchState(store, {answers: []})
        },
        log() {
            patchState(store, state => {
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
            patchState(store, state => ({answers: [...state.answers, answer]}))
        }, 
        regenerate: rxMethod<void>(pipe(
            tap(() => patchState(store, ({isBusy: true}))),
            exhaustMap(_ => service.createRandomQuiz().pipe(
                tap(res => patchState(store, ({
                    questions: res, answers: [], 
                    isBusy: false
                })))
            ))
        ))
    }))
);