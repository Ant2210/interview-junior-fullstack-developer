import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CitiesComponent } from './cities/cities.component';
import { NgxBootstrapIconsModule } from 'ngx-bootstrap-icons'
import { search } from 'ngx-bootstrap-icons';

const icons = { search }

@NgModule({
  declarations: [
    AppComponent,
    CitiesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxBootstrapIconsModule.pick(icons),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
