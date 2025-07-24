import { Component, ViewChild } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { PriorityColorPipe } from '../pipes/priority-color.pipe';
import { CategoryIconPipe } from '../pipes/category-icon.pipe';
import { FormsModule } from '@angular/forms';
import { IonModal} from '@ionic/angular/standalone';
import { ModalController } from '@ionic/angular';
import { AddTaskPage } from '../add-task/add-task.page';

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

  @ViewChild(IonModal) modal!: IonModal;

  message = 'This modal example uses triggers to automatically open a modal when the button is clicked.';
  name!: string;

  toDoList = [
    {
      title: 'Estudiar Java',
      category: 'Trabajo',
      priority: 'Alta',
      description: 'Terminar modulo pendiente para finalizar curso'
    },
    {
      title: 'Meditar minimo 30 minutos',
      category: 'Personal',
      priority: 'Media',
      description: 'Meditacion recomendada dada la semana en curso'    },
    {
      title: 'Ir a cenar con tus padres',
      category: 'Familiar',
      priority: 'Baja',
      description: 'Recuerda la cena pendiente que tenes con ellos'
    },
    {
      title: 'Reparar la freidora de aire',
      category: 'Hogar',
      priority: 'Alta',
      description: 'No olvides llevar el aparato al tecnico'
    },
    {
      title: 'Jugar PS4',
      category: 'Otra',
      priority: 'Alta',
      description: 'Aprovecha estas libre hoy'
    }
  ];

  today: Date = new Date();
  constructor(public modalController: ModalController) {
  }

  async openAddTask(){
    const modal = await this.modalController.create({
      component: AddTaskPage,
    })
  return await modal.present();
  }


}
