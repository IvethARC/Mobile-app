import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { PriorityColorPipe } from '../pipes/priority-color.pipe';
import { CategoryIconPipe } from '../pipes/category-icon.pipe';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [ CommonModule, IonicModule, PriorityColorPipe, CategoryIconPipe ]
})
export class HomePage {

  toDoList = [
    {
      title: 'Estudiar Java',
      category: 'Trabajo',
      priority: 'High',
      description: 'Terminar modulo pendiente para finalizar curso'
    },
    {
      title: 'Meditar minimo 30 minutos',
      category: 'Personal',
      priority: 'Middle',
      description: 'Meditacion recomendada dada la semana en curso'    },
    {
      title: 'Ir a cenar con tus padres',
      category: 'Familiar',
      priority: 'Low',
      description: 'Recuerda la cena pendiente que tenes con ellos'
    },
    {
      title: 'Reparar la freidora de aire',
      category: 'Hogar',
      priority: 'High',
      description: 'No olvides llevar el aparato al tecnico'
    },
    {
      title: 'Jugar PS4',
      category: 'Otra',
      priority: 'High',
      description: 'Aprovecha estas libre hoy'
    }
  ];

  today: Date = new Date();
  constructor() {}
}
