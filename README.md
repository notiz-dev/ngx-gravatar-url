# ngx-gravatar-url

Angular Pipe to create a Gravatar URL based on [gravatar-url](https://github.com/sindresorhus/gravatar-url#readme) package.

```bash
npm i ngx-gravatar-url gravatar-url
```

Add the `GravatarUrlPipeModule` to your component module.

```ts
import { GravatarUrlPipeModule } from 'ngx-gravatar-url';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, GravatarUrlPipeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

Use the `gravatarUrl` pipe in your template

```html
<img [src]="user.email | gravatarUrl" alt="User avatar" />
```

Pass default options to `GravatarUrlPipeModule` using the `forRoot` or `forChild` method.

```ts
import { GravatarUrlPipeModule } from 'ngx-gravatar-url';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    GravatarUrlPipeModule.forRoot({ default: 'retro', size: 100 }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
```
