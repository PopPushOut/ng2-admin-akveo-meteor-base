//import './app.loader.ts';
import { Component, ViewEncapsulation, ViewContainerRef } from '@angular/core';
import { GlobalState } from './global.state';
import { BaImageLoaderService, BaThemePreloader, BaThemeSpinner } from './theme/services';
import { layoutPaths } from './theme/theme.constants';
import { BaThemeConfig } from './theme/theme.config';
import style from './app.scss';
import template from './app.component.html';


@Component({
  selector: "app",
  encapsulation: ViewEncapsulation.None,
  template,
  styles: [style]
})
export class AppComponent {
  isMenuCollapsed: boolean = true;
  constructor(private _state: GlobalState,
              private _imageLoader: BaImageLoaderService,
              private _spinner: BaThemeSpinner,
              private _config: BaThemeConfig,
              private viewContainerRef: ViewContainerRef) {

    this._loadImages();
    console.log("app constructor!");
    this._state.subscribe('menu.isCollapsed', (isCollapsed) => {
      this.isMenuCollapsed = isCollapsed;
    });
  }
  public ngAfterViewInit(): void {
    console.log("as cia");
    // hide spinner once all loaders are completed
    BaThemePreloader.load().then((values) => {
      this._spinner.hide();
    });
  }

  private _loadImages(): void {
    // register some loaders
    BaThemePreloader.registerLoader(this._imageLoader.load(layoutPaths.images.root + 'sky-bg.jpg'));
  }
}
