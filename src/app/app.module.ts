import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { IonicStorageModule } from '@ionic/storage-angular';
import { PriorityColorPipe } from './pipes/priority-color.pipe';
import { CategoryIconPipe } from './pipes/category-icon.pipe';



@NgModule({
  declarations: [
    PriorityColorPipe,
    CategoryIconPipe
  ],
  imports: [
    CommonModule,
    IonicModule.forRoot(),
    IonicStorageModule.forRoot()
  ]
})
export class AppModule { }
