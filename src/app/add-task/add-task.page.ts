import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { IonicModule } from '@ionic/angular';
import { PriorityColorPipe } from '../pipes/priority-color.pipe';
import { ToDoListService } from '../services/to-do-list.service';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [IonicModule,
            CommonModule,
            FormsModule,
            PriorityColorPipe,
            ReactiveFormsModule
          ],
  templateUrl: './add-task.page.html',
  styleUrls: ['./add-task.page.scss'],
})
export class AddTaskPage implements OnInit {

  priorities: string[] = [];
  categories: string[] = [];
  title: string = '';
  description: string = '';
  priority: string = '';
  category: string = '';

  customAlertOptions: any = {
    header: 'Prioridad',
    subHeader: 'Segun urgencia de ejeccuión',
    translucent: true
  };
  customCategoryAlertOptions: any = {
    header: 'Categoria',
    subHeader: 'Seleccione el tipo de tarea',
    translucent: true
  };

  myForm: FormGroup;

  constructor(private modalCtrl: ModalController,
              private toDoService: ToDoListService,
              private fb: FormBuilder
  ) {
      this.priorities = this.toDoService.priorities;
      this.categories = this.toDoService.categories;

      this.myForm = this.fb.group({
        taskTitle: ['', Validators.required],
        taskDescription: [''],
        priority: ['', Validators.required],
        category: ['', Validators.required]
    });
  }

  ngOnInit() {}

  close() {
    this.modalCtrl.dismiss();
  }

onAddNewTask() {
  if (this.myForm.invalid) return;

  const formValues = this.myForm.value;

  const newTask = {
    id: Date.now(),
    title: formValues.taskTitle,
    description: formValues.taskDescription,
    category: formValues.category,
    priority: formValues.priority
  };

  this.toDoService.addTask(newTask);
  this.close();
}


}
