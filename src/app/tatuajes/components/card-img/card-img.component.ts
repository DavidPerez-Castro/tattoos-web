import { Component, Input, OnInit } from '@angular/core';
import { Tato } from '../../interfaces/tato.interface';

@Component({
  selector: 'tatuajes-tato-card-img',
  templateUrl: './card-img.component.html',
  styles: ``
})
export class CardImgComponent implements OnInit {

  //constructor() { }

  @Input()
  public tato!: Tato;

  ngOnInit(): void {
    if (!this.tato) throw Error('Tato property is required');
  }

}
