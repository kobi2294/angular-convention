import { Component } from '@angular/core';
import { SharedModule } from './shared.module';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { QuestionPresenterComponent } from './components/question-presenter/question-presenter.component';
import { Question } from './models/question.model';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [SharedModule, ToolbarComponent, QuestionPresenterComponent],
})
export class AppComponent {
  question: Question = {
    caption: 'What do you get if you mix red with black',
    answers: ['red', 'green', 'blue', 'black'],
    correctIndex: 0,
  };
}
