import { Component, ViewEncapsulation } from '@angular/core';

import './ckeditor.loader.ts';
import style from './ckeditor.scss';
import template from './ckeditor.html';
@Component({
  selector: 'ckeditor-component',
  encapsulation: ViewEncapsulation.None,
  template,
  styles: [style]
})

export class Ckeditor {
  public ckeditorContent:string = '<p>Hello CKEditor</p>';
  public config = {
    uiColor: '#F0F3F4',
    height: '600'
  };

  constructor() {
  }
}
