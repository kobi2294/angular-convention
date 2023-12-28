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
    console.log(window.__REDUX_DEVTOOLS_EXTENSION__);
    if (window.__REDUX_DEVTOOLS_EXTENSION__) {
      const connection = window.__REDUX_DEVTOOLS_EXTENSION__.connect({name: 'Lets party'});
      connection.init({x: 20, y: 30});

      const connection2 = window.__REDUX_DEVTOOLS_EXTENSION__.connect({name: 'Lets party 2'});
      connection2.init({x: 20, y: 30});

      connection.send('Yipppy 1', {x: 30, y: 30});
      connection.send('Yipppy 2', {x: 40, y: 20});
      connection.send('Yipppy 3', {x: 50, y: 10});

      const sub = connection.subscribe(msg => console.log('message from devtools', msg));
      console.log('connection', connection);
      console.log('subscription', sub);

      setTimeout(() => {
        console.log('unsubscribing');
        sub();
      }, 60000);
    }
  }


}
