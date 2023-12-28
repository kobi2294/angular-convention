import { Component, inject, effect } from '@angular/core';
import { SharedModule } from './shared.module';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { QuestionPresenterComponent } from './components/question-presenter/question-presenter.component';
import { Question } from './models/question.model';
import { ProgressComponent } from './components/progress/progress.component';
import { DoneComponent } from './components/done/done.component';
import { QuizStore } from './app.store';
import { randomColorQuestion } from './services/helpers';
import { getState } from '@ngrx/signals';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [SharedModule, ToolbarComponent, QuestionPresenterComponent, ProgressComponent, DoneComponent],
  providers: [QuizStore]
})
export class AppComponent {
  store = inject(QuizStore);
  question: Question = randomColorQuestion();

  constructor() {
  }


}
