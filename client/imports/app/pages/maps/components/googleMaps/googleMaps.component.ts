import {Component, ElementRef} from '@angular/core';
//import {GoogleMapsLoader} from './googleMaps.loader';
import template from './googleMaps.html';
import style from './googleMaps.scss';
@Component({
  selector: 'google-maps',
  styles: [style],
  template
})
export class GoogleMaps {

  constructor(private _elementRef:ElementRef) {
  }

  ngAfterViewInit() {
    let el = this._elementRef.nativeElement.querySelector('.google-maps');

    // TODO: do not load this each time as we already have the library after first attempt
    GoogleMapsLoader.load((google) => {
      new google.maps.Map(el, {
        center: new google.maps.LatLng(44.5403, -78.5463),
        zoom: 8,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      });
    });
  }
}
