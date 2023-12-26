import { signalStore, withComputed, withState } from "@ngrx/signals";
import { QuizState } from "./models/quiz-state.model";
import { QUESTIONS } from "./data/questions";
import { computed } from "@angular/core";

export const QuizStore = signalStore(
    withState<QuizState>({questions: QUESTIONS, answers: []}), 
    withComputed(({questions, answers}) => ({
        currentQuestionIndex: computed(() => answers().length), 
        totalQuestions: computed(() => questions().length),
        isDone: computed(() => answers().length === questions().length), 
        correctCount: computed(()=> answers().filter(a => a.isCorrect).length), 
    })), 
    withComputed(({questions, currentQuestionIndex}) => ({
        currentQuestion: computed(() => questions()[currentQuestionIndex()])
    }))
);