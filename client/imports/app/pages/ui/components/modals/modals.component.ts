import { Component, ViewChild } from '@angular/core';
import { ModalDirective } from 'ng2-bootstrap';
import template from './modals.html';
import style from './modals.scss';
@Component({
  selector: 'modals',
  styles: [style],
  template
})
export class Modals {
  @ViewChild('childModal') childModal: ModalDirective;

  showChildModal(): void {
    this.childModal.show();
  }

  hideChildModal(): void {
    this.childModal.hide();
  }
}
