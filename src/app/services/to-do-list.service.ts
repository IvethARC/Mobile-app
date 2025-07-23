import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class ToDoListService {

  constructor(private storage: Storage) { }

  addTask(){

  }

  updateTask(){

  }

  deleteTask(){

  }

  getTasks() {
    return this.storage.get('tasks');
  }
}
