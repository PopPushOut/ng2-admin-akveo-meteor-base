import {Component, ViewEncapsulation} from '@angular/core';

import {FeedService} from './feed.service';
import style from './feed.scss';
import template from './feed.html';
@Component({
  selector: 'feed',
  encapsulation: ViewEncapsulation.None,
  styles: [style],
  template
})
export class Feed {

  public feed:Array<Object>;

  constructor(private _feedService:FeedService) {
  }

  ngOnInit() {
    this._loadFeed();
  }

  expandMessage (message){
    message.expanded = !message.expanded;
  }

  private _loadFeed() {
    this.feed = this._feedService.getData();
  }
}
