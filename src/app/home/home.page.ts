import { Component, ViewChild } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { PriorityColorPipe } from '../pipes/priority-color.pipe';
import { CategoryIconPipe } from '../pipes/category-icon.pipe';
import { FormsModule } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { AddTaskPage } from '../add-task/add-task.page';
import { ToDoListService, Task } from '../services/to-do-list.service';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [ 
    CommonModule,
    IonicModule,
    PriorityColorPipe,
    CategoryIconPipe,
    FormsModule,
    AddTaskPage
  ]
})
export class HomePage {
  toDoList: Task[] = [];
  today: Date = new Date();

  constructor(private toDoService: ToDoListService,
              public modalController: ModalController) {
  }

    ngOnInit() {
    this.toDoService.getTasks().subscribe(tasks => {
      this.toDoList = tasks;
    });
  }

  async openAddTask(){
    const modal = await this.modalController.create({
      component: AddTaskPage,
    })
  return await modal.present();
  }

  deleteTask(id: number) {
  this.toDoService.deleteTask(id);
  }

  toggleCompleted(id: number) {
  this.toDoService.toggleCompleted(id);
}

async editTask(task: Task) {
  const modal = await this.modalController.create({
    component: AddTaskPage,
    componentProps: {
      existingTask: task
    }
  });
  return await modal.present();
}




}
