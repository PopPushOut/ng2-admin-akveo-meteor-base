import {Component} from '@angular/core';
import {BaMsgCenterService} from './baMsgCenter.service';

import style from './baMsgCenter.scss';
import template from './baMsgCenter.html';

@Component({
  selector: 'ba-msg-center',
  providers: [BaMsgCenterService],
  styles: [style],
  template
})
export class BaMsgCenter {

  public notifications:Array<Object>;
  public messages:Array<Object>;

  constructor(private _baMsgCenterService:BaMsgCenterService) {
    this.notifications = this._baMsgCenterService.getNotifications();
    this.messages = this._baMsgCenterService.getMessages();
  }

}
