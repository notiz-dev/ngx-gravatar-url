import { GravatarUrlPipeModule } from "ngx-gravatar-url";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, GravatarUrlPipeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
