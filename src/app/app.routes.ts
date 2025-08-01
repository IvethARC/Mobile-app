import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => 
      import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'add-task',
    loadComponent: () =>
      import('./add-task/add-task.page').then( m => m.AddTaskPage)
  },
];
