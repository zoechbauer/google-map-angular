import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      // TODO change apiKey before commit
      apiKey: 'AIzaSyBtPlYHSJEb_fg2rqIGNmLUvM5pVt8JTvE'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
