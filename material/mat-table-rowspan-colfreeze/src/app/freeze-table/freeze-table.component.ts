import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
@Component({
  selector: 'app-freeze-table',
  templateUrl: './freeze-table.component.html',
  styleUrls: ['./freeze-table.component.css']
})
export class FreezeTableComponent implements OnInit {

  displayedColumns: string[] = [
    'col1',
    'col2',
    'col3',
    'col4',
    'col5',
    'col6',
    'col7',
    'col8',
    'col9',
    'col10',
    'col11',
    'col12',
    'col13',
    'col14',
    'col15',
    'col16',
    'col17',
    'col18',
  ];
  dataSource = new MatTableDataSource<TableData>(TABLE_DATA);
  isSticky (column: string): boolean {
    return column === 'col1' || column === 'col2' ? true : false;
  }
  constructor() { }

  ngOnInit() {
  }
}

export interface TableData {
  col1: string;
  col2: string;
  col3: string;
  col4: string;
  col5: string;
  col6: string;
  col7: string;
  col8: string;
  col9: string;
  col10: string;
  col11: string;
  col12: string;
  col13: string;
  col14: string;
  col15: string;
  col16: string;
  col17: string;
  col18: string;
}

const TABLE_DATA: TableData[] = [
  {
    col1: 'val',
    col2: 'val',
    col3: 'val',
    col4: 'val',
    col5: 'val',
    col6: 'val',
    col7: 'val',
    col8: 'val',
    col9: 'val',
    col10: 'val',
    col11: 'val',
    col12: 'val',
    col13: 'val',
    col14: 'val',
    col15: 'val',
    col16: 'val',
    col17: 'val',
    col18: 'val',
  },
]
