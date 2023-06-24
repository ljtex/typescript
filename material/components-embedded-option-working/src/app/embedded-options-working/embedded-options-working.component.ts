import {
  AfterViewInit,
  Component,
  Host,
  OnInit,
  QueryList,
  ViewChildren
} from "@angular/core";
import { MatSelect } from "@angular/material/select";
import { MatAutocomplete } from "@angular/material/autocomplete";
import { MatOption } from "@angular/material/core";

@Component({
  selector: "app-embedded-options-working",
  templateUrl: "./embedded-options-working.component.html",
  styleUrls: ["./embedded-options-working.component.css"]
})
export class EmbeddedOptionsWorkingComponent implements OnInit {
  @ViewChildren(MatOption) protected options: QueryList<MatOption>;

  constructor(@Host() private select: MatSelect) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.initOptions();
  }

  /**
   * Call the init method to init the options
   * This method must be called on the AfterViewInit life cycle
   *
   * This method must be call only Once
   */
  protected initOptions(): void {
    // the observable is complete on destroy
    this.options.changes.subscribe(options =>
      this.registerSelectOptions(this.select, options)
    );
    this.registerSelectOptions(this.select, this.options);
  }

  /**
   * This method can be called to manually register options
   * @param select MatSelect instance
   * @param options options to add
   */
  protected registerSelectOptions(
    select: MatSelect | MatAutocomplete,
    options: QueryList<MatOption>
  ): void {
    // reset the option in select
    select.options.reset([
      ...select.options.toArray(), // existing option
      ...options.toArray() // new options
    ]);
    // notify the select that options have changed
    select.options.notifyOnChanges();
  }
}
