import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'priorityColor'
})
export class PriorityColorPipe implements PipeTransform {

  transform(priority: string): string {
    switch (priority?.toLowerCase()) {
      case 'high':
        return 'danger';
      case 'middle':
        return 'warning';
      case 'low':
        return 'success';
      default:
        return 'medium'; 
    }
  }
}
