import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProfileFormComponent } from './components/profile-form/profile-form.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ProfileFormComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
