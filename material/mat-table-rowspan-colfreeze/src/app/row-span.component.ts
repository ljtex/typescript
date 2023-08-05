import { Component, OnInit } from "@angular/core";
import { RowSpanComputer, Span } from "./row-span-computer";

@Component({
  selector: "row-span",
  templateUrl: "./row-span.component.html",
  styleUrls: ["./row-span.component.css"]
})
export class RowSpanComponent implements OnInit {
  data = [
    { c1: "a", c2: 1, c3: "y", c4: "-", c5: true, c6: 0 },
    { c1: "a", c2: 1, c3: "y", c4: "-", c5: true, c6: 1 },
    { c1: "a", c2: 1, c3: "y", c4: "-", c5: true, c6: 1 },
    { c1: "a", c2: 1, c3: "y", c4: "-", c5: false, c6: 1 },
    { c1: "a", c2: 2, c3: "y", c4: "+", c5: false, c6: 0 },
    { c1: "a", c2: 2, c3: "x", c4: "-", c5: false, c6: 0 },
    { c1: "b", c2: 2, c3: "x", c4: "+", c5: false, c6: 0 },
    { c1: "b", c2: 3, c3: "x", c4: "+", c5: true, c6: 0 },
    { c1: "b", c2: 3, c3: "x", c4: "+", c5: true, c6: 1 }
  ];
  columnNames: string[];
  lastColumnName: string; 
  allButLastColumnNames: string[];
  rowSpans: Array<Span[]>;

  private rowSpanComputer = new RowSpanComputer();

  ngOnInit() {
    this.columnNames = Object.keys(this.data[0]);
    this.lastColumnName = this.columnNames[this.columnNames.length - 1];
    this.allButLastColumnNames = this.columnNames.slice(0, -1);
    this.rowSpans = this.rowSpanComputer.compute(this.data, this.allButLastColumnNames);
  }
}
