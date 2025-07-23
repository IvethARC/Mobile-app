import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [ CommonModule, IonicModule ]
})
export class HomePage {

  toDoList = [
    {
      title: 'Estudiar Java',
      category: 'Trabajo',
      priority: 'High',
      description: 'Terminar modulo pendiente para finalizar curso',
      completed: false
    },
    {
      title: 'Meditar minimo 30 minutos',
      category: 'Personal',
      priority: 'Middle',
      description: 'Meditacion recomendada dada la semana en curso',
      completed: true
    },
    {
      title: 'Ir a cenar con tus padres',
      category: 'Familiar',
      priority: 'Low',
      description: 'Recuerda la cena pendiente que tenes con ellos',
      completed: false
    },
    {
      title: 'Reparar la freidora de aire',
      category: 'Hogar',
      priority: 'High',
      description: 'No olvides llevar el aparato al tecnico',
      completed: true
    }
  ];

  today: Date = new Date();
  constructor() {}
}
