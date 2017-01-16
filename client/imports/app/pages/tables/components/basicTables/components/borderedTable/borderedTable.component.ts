import {Component} from '@angular/core';
import template from './borderedTable.html';
import {BasicTablesService} from '../../basicTables.service';

@Component({
  selector: 'bordered-table',
  template
})
export class BorderedTable {

  metricsTableData:Array<any>;

  constructor(private _basicTablesService: BasicTablesService) {
    this.metricsTableData = _basicTablesService.metricsTableData;
  }
}
