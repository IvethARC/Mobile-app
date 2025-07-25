import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface Task {
  id: number;
  title: string;
  description: string;
  category: string;
  priority: string;
}

@Injectable({
  providedIn: 'root'
})
export class ToDoListService {

  priorities: string[] = ['Alta', 'Media', 'Baja'];
  categories: string[] = ['Trabajo', 'Personal', 'Familiar', 'Hogar', 'Otros'];
  
  private tasks: Task[] = [];
  private tasks$ = new BehaviorSubject<Task[]>([]);
  
  constructor() {}

  getTasks(): Observable<Task[]> {
    return this.tasks$.asObservable();
  }
  
  addTask(task: Task) {
    this.tasks.push(task);
    this.tasks$.next(this.tasks);
  }

  updateTask(updatedTask: Task) {
    const index = this.tasks.findIndex(t => t.id === updatedTask.id);
    if (index !== -1) {
      this.tasks[index] = updatedTask;
      this.tasks$.next(this.tasks);
    }
  }

  deleteTask(id: number) {
    this.tasks = this.tasks.filter(task => task.id !== id);
    this.tasks$.next(this.tasks);
  }


}
