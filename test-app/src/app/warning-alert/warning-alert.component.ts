import { Component } from "@angular/core";

@Component({
  selector: "app-warning-alert",
  template: ` <p>this is a warning</p> `,
  styles: [
    `
      p {
        padding: 20px;
        background-color: red;
        border: 1px solid red;
      }
    `,
  ],
})
export class WarningAlertComponent {}
