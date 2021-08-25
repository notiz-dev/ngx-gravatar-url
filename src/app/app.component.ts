import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  template: `
    <div>
      <h1>ngx-gravatar-url</h1>

      <div>
        <p>test@example.com</p>
        <img [src]="'test@example.com' | gravatarUrl" />
      </div>
    </div>
  `,
  styles: [],
})
export class AppComponent {
  title = "ngx-gravatar-url";
}
