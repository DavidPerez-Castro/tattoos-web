import { Pipe, PipeTransform } from '@angular/core';
import { Tato } from '../interfaces/tato.interface';

@Pipe({
  name: 'tatoImage'
})

export class TatoImagePipe implements PipeTransform {

  transform( tato: Tato ): string {

    if ( !tato._id && !tato.imageUrl ) {
      return 'assets/no-image.png';
    }

    if ( tato.imageUrl ) return tato.imageUrl;

    return `assets/tatuajes/${ tato._id }.jpg`;

  }

}
