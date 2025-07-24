import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { IonicModule } from '@ionic/angular';
import { PriorityColorPipe } from '../pipes/priority-color.pipe';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [IonicModule,
            CommonModule,
            FormsModule,
            PriorityColorPipe,
          ],
  templateUrl: './add-task.page.html',
  styleUrls: ['./add-task.page.scss'],
})
export class AddTaskPage implements OnInit {

  priority: string = '';
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

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

    close() {
    this.modalCtrl.dismiss();
  }

}
