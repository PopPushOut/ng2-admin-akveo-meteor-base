import {Component, ViewEncapsulation} from '@angular/core';

import {UsersMapService} from './usersMap.service';
import style from './usersMap.scss';
import template from './usersMap.html';
@Component({
  selector: 'users-map',
  encapsulation: ViewEncapsulation.None,
  styles: [style],
  template
})
export class UsersMap {

  mapData:Object;

  constructor(private _usersMapService:UsersMapService) {
    this.mapData = this._usersMapService.getData();
  }
}
