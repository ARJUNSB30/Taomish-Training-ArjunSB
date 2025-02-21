import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipe',
  standalone: false
})
export class PipePipe implements PipeTransform {

  transform(value: string, caseType: 'snake' | 'camel' = 'camel'): string {
    if (!value) return value;

    if (caseType === 'snake') {
      return value
        .replace(/\s+/g, '_') 
        .toLowerCase();
    } else { 
      return value
        .replace(/\s(.)/g, (match) => match.toUpperCase()) 
        .replace(/\s+/g, '') 
        .replace(/^(.)/, (match) => match.toLowerCase()); 
   
  }
}
}