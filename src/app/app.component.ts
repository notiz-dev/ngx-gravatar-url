import { GravatarDefaults } from "ngx-gravatar-url";
import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  template: `
    <div class="container mx-auto mt-16 min-h-screen space-y-24">
      <div class="prose">
        <h1>ngx-gravatar-url</h1>

        Check out
        <a href="https://github.com/notiz-dev/ngx-gravatar-url#readme"
          >ngx-gravatar-url</a
        >
        repo.
      </div>

      <div
        class="rounded-md shadow-md bg-white p-4 flex flex-col items-center justify-center"
      >
        <img class="-mt-12 " [src]="email | gravatarUrl:{default}" />
        <div class="mt-6 w-full flex">
          <select
            [(ngModel)]="default"
            class=" mt-1 rounded-l-md border-r-0 border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          >
            <option>404</option>
            <option>blank</option>
            <option>identicon</option>
            <option>mm</option>
            <option>monsterid</option>
            <option>retro</option>
            <option>wavatar</option>
          </select>
          <input
            type="text"
            class="mt-1 w-full rounded-r-md border-gray-300 shadow-sm focus:border-red-300 focus:ring focus:ring-red-200 focus:ring-opacity-50"
            [(ngModel)]="email"
          />
        </div>
      </div>
    </div>
  `,
  styles: [],
})
export class AppComponent {
  email: string = "your-email";
  default: GravatarDefaults = "identicon";
}
