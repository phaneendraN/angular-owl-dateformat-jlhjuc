import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { OwlDateTimeModule, OwlNativeDateTimeModule } from "ng-pick-datetime";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { DateFilterPipe } from "./date-filter.pipe";
import { CommonModule, DatePipe } from "@angular/common";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  providers: [DatePipe]
})
export class AppModule {}
