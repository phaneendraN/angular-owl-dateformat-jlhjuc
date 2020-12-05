import { Component } from "@angular/core";
import {
  DateTimeAdapter,
  OWL_DATE_TIME_FORMATS,
  OWL_DATE_TIME_LOCALE
} from "ng-pick-datetime";
import { MomentDateTimeAdapter } from "ng-pick-datetime/date-time/adapter/moment-adapter/moment-date-time-adapter.class";

export const MY_CUSTOM_FORMATS = {
  fullPickerInput: "YYYY/MM/DD",
  parseInput: "YYYY/MM/DD",
  datePickerInput: "YYYY/MM/DD",
  timePickerInput: "LT",
  monthYearLabel: "MMM YYYY",
  dateA11yLabel: "LL",
  monthYearA11yLabel: "MMMM YYYY"
};

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  providers: [
    {
      provide: DateTimeAdapter,
      useClass: MomentDateTimeAdapter,
      deps: [OWL_DATE_TIME_LOCALE]
    },
    { provide: OWL_DATE_TIME_FORMATS, useValue: MY_CUSTOM_FORMATS }
  ]
})
export class AppComponent {
  currentDate = new Date();
  dateFormat = "yyyy/MM/dd";

  formatList = [
    "y/M/d",
    "y/MM/d",
    "dd-MM-yy",
    "hh:mm MM/dd/yyyy",
    "hh:mm MM/dd/yyyy",
    "hh:mm:ss MM/dd/yy",
    "HH:mm:ss MM/dd/yy",
    "hh:mm:ss MMM/dd/yy",
    "hh:mm:ss MMMM/dd/yy",
    "hh:mm:ss MMMM/d/yy",
    "hh:mm:ss MMMM/dd/yyyy",
    "M-dd-yy h:mm"
    // etc...
  ];

  onButtonClick() {
    console.log(this.currentDate);
  }
}
