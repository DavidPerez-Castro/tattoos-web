import { Component, OnInit, Input } from '@angular/core';
import { Tato } from '../../interfaces/tato.interface';

@Component({
  selector: 'tatuajes-tato-card',
  templateUrl: './card.component.html',

})

export class CardComponent implements OnInit {

  //constructor() { }

  @Input()
  public tato!: any;

  ngOnInit(): void {
    if (!this.tato) throw Error('Tato property is required');
  }

}
