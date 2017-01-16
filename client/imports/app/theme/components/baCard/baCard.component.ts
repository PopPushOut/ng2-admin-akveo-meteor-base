import {Component, ViewEncapsulation, ViewChild, Input} from '@angular/core';
import style from './baCard.scss';
import template from './baCard.html';
@Component({
  selector: 'ba-card',
  styles: [style],
  template,
  encapsulation: ViewEncapsulation.None
})
export class BaCard {
  @Input() title:String;
  @Input() baCardClass:String;
}
