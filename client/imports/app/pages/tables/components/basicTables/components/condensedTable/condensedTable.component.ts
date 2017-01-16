import {Component} from '@angular/core';
import template from './condensedTable.html';
import {BasicTablesService} from '../../basicTables.service';

@Component({
  selector: 'condensed-table',
  template
})
export class CondensedTable {

  peopleTableData:Array<any>;

  constructor(private _basicTablesService: BasicTablesService) {
    this.peopleTableData = _basicTablesService.peopleTableData;
  }
}
