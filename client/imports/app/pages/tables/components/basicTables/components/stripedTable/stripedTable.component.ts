import {Component} from '@angular/core';
import template from './stripedTable.html';
import {BasicTablesService} from '../../basicTables.service';

@Component({
  selector: 'striped-table',
  template
})
export class StripedTable {

  smartTableData:Array<any>;

  constructor(private _basicTablesService: BasicTablesService) {
    this.smartTableData = _basicTablesService.smartTableData;
  }
}
