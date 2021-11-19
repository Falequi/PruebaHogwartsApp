import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {
  transform(imagen: string): string {
    return (imagen === "")?'assets/no-image.png': imagen;
  }
}
