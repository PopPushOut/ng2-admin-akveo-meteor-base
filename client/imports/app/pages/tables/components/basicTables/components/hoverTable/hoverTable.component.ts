import {Component} from '@angular/core';
import template from './hoverTable.html';
import {BasicTablesService} from '../../basicTables.service';

@Component({
  selector: 'hover-table',
  template
})
export class HoverTable {

  metricsTableData:Array<any>;

  constructor(private _basicTablesService: BasicTablesService) {
    this.metricsTableData = _basicTablesService.metricsTableData;
  }
}
