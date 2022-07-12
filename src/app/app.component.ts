import { GravatarDefaults } from 'ngx-gravatar-url';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="max-w-xl mx-auto mt-16 min-h-screen space-y-24">
      <div class="prose">
        <h1>ngx-gravatar-url</h1>

        Check out the repo:
        <a href="https://github.com/notiz-dev/ngx-gravatar-url#readme">
          ngx-gravatar-url
        </a>
      </div>

      <div
        class="rounded-md shadow bg-white p-4 flex flex-col items-center justify-center"
      >
        <img
          class="-mt-16 rounded-lg shadow h-24"
          [src]="email | gravatarUrl: { default: this.default }"
        />
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
            [(ngModel)]="_email"
          />
        </div>
      </div>

      <p class="prose">
      Created by <a href="https://notiz.dev">notiz.dev</a>.
      </p> 
    </div>
  `,
  styles: [],
})
export class AppComponent {
  _email: string = 'your-email';

  get email() {
    if (!this._email) {
      return 'placeholder';
    }
    return this._email;
  }

  default: GravatarDefaults = 'identicon';
}
