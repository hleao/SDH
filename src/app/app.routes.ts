import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'questions',
    loadComponent: () => import('./questions/questions.page').then( m => m.QuestionsPage)
  },
  {
    path: 'answers',
    loadComponent: () => import('./answers/answers.page').then( m => m.AnswersPage)
  },
];
