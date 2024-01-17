import { Pipe, PipeTransform } from '@angular/core';
import { Tato } from '../interfaces/tato.interface';

@Pipe({
  name: 'tatoImage'
})

export class TatoImagePipe implements PipeTransform {

  transform( tato: Tato ): string {

    if ( !tato.id && !tato.image ) {
      return 'assets/no-image.png';
    }

    if ( tato.image ) return tato.image; // https:///google.com/flash.png

    return `assets/tatuajes/${ tato.id }.jpg`;

  }

}
