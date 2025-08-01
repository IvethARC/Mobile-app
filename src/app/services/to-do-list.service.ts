import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Storage } from '@ionic/storage-angular';

export interface Task {
  id: number;
  title: string;
  description: string;
  category: string;
  priority: string;
  completed?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class ToDoListService {

  private _storage: Storage | null = null;
  priorities: string[] = ['Alta', 'Media', 'Baja'];
  categories: string[] = ['Trabajo', 'Personal', 'Familiar', 'Hogar', 'Otros'];
  
  private tasks: Task[] = [];
  private tasks$ = new BehaviorSubject<Task[]>([]);
  
  constructor(private storage: Storage) {
    this.init();
  }

  async init() {
    this._storage = await this.storage.create();
    const savedTasks = await this._storage.get('tasks');
    this.tasks = savedTasks || [];
    this.tasks$.next(this.tasks);
  }

  getTasks(): Observable<Task[]> {
    return this.tasks$.asObservable();
  }

  private async updateStorage() {
    await this._storage?.set('tasks', this.tasks);
  }
  
  async addTask(task: Task) {
    this.tasks.push(task);
    await this.updateStorage();
    this.tasks$.next(this.tasks);
  }

  async updateTask(updatedTask: Task) {
    const index = this.tasks.findIndex(t => t.id === updatedTask.id);
    if (index !== -1) {
      this.tasks[index] = updatedTask;
      await this.updateStorage();
      this.tasks$.next(this.tasks);
    }
  }

  async deleteTask(id: number) {
    this.tasks = this.tasks.filter(task => task.id !== id);
    await this.updateStorage();  
    this.tasks$.next(this.tasks);
  }

  async toggleCompleted(id: number) {
    const task = this.tasks.find(t => t.id === id);
    if (task) {
      task.completed = !task.completed;
      await this._storage?.set('tasks', this.tasks);
      this.tasks$.next(this.tasks);
    }
  }


}
