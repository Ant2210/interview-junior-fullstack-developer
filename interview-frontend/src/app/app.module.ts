import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CitiesComponent } from './cities/cities.component';
import { NgxBootstrapIconsModule } from 'ngx-bootstrap-icons'
import { search } from 'ngx-bootstrap-icons';
import { FormsModule } from '@angular/forms';
import { CustomFilterPipe } from './custom-filter-pipe.pipe';

const icons = { search }

@NgModule({
  declarations: [
    AppComponent,
    CitiesComponent,
    CustomFilterPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxBootstrapIconsModule.pick(icons),
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
